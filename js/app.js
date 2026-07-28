/* ============================================================
   THE HOOK — Band Room
   No build step. Edit data/songs.js, data/charts.js, data/gigs.js.
   ============================================================ */
(function () {
  "use strict";

  const app = document.getElementById("app");
  const playerBar = document.getElementById("player-bar");
  const playerAudio = document.getElementById("player-audio");
  const playerTitle = document.getElementById("player-title");

  const SONGS = window.SONGS || [];
  const CHARTS = window.CHARTS || {};
  const GIGS = window.GIGS || [];
  const BAND = window.BAND || {};

  const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const DOWS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  let transpose = 0;
  let scrollTimer = null;

  document.getElementById("song-count").textContent =
    SONGS.length + " songs in the book";

  /* ---------------- Chords & transposition ---------------- */

  const SHARPS = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
  const FLATS  = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];
  const NOTE_INDEX = {
    "C":0,"B#":0,"C#":1,"Db":1,"D":2,"D#":3,"Eb":3,"E":4,"Fb":4,"E#":5,
    "F":5,"F#":6,"Gb":6,"G":7,"G#":8,"Ab":8,"A":9,"A#":10,"Bb":10,"B":11,"Cb":11
  };
  const FLAT_KEYS = new Set(["F","Bb","Eb","Ab","Db","Gb","Dm","Gm","Cm","Fm","Bbm","Ebm"]);

  // Keys/chords may be authored with the real accidental glyphs (E♭, F♯);
  // parse in ASCII, display with the glyphs.
  const ascii = s => (s || "").replace(/♭/g, "b").replace(/♯/g, "#");
  const pretty = s => (s || "").replace(/([A-G])b/g, "$1♭").replace(/([A-G])#/g, "$1♯");

  const CHORD_RE = /^([A-G][#b]?)([^/]*)(\/([A-G][#b]?))?$/;
  const QUALITY_RE = /^(?:maj|min|dim|aug|sus|add|alt|no3|m|M|b|#|\d|\(|\)|\+|°|ø|-)*$/;

  function isChordToken(tok) {
    if (!tok) return false;
    const m = ascii(tok).match(CHORD_RE);
    if (!m) return false;
    // Reject plain English words that happen to start A–G ("Am7" is a chord; "Baby" is not)
    return QUALITY_RE.test(m[2] || "");
  }

  function transposeNote(note, offset, useFlats) {
    const idx = NOTE_INDEX[note];
    if (idx === undefined) return note;
    const n = ((idx + offset) % 12 + 12) % 12;
    return useFlats ? FLATS[n] : SHARPS[n];
  }

  function transposeChord(chord, offset, useFlats) {
    const m = ascii(chord).match(CHORD_RE);
    if (!m) return chord;
    // At rest, keep the chart author's enharmonic spelling — only prettify it.
    if (offset === 0) return pretty(m[0]);
    let out = transposeNote(m[1], offset, useFlats) + (m[2] || "");
    if (m[4]) out += "/" + transposeNote(m[4], offset, useFlats);
    return pretty(out);
  }

  function transposedKey(key, offset) {
    if (!key) return "";
    const m = ascii(key).match(/^([A-G][#b]?)(m?)$/);
    if (!m) return key;
    const useFlats = guessFlats(key, offset);
    return pretty(transposeNote(m[1], offset, useFlats) + m[2]);
  }

  function guessFlats(key, offset) {
    const m = ascii(key).match(/^([A-G][#b]?)(m?)$/);
    if (!m) return false;
    const root = transposeNote(m[1], offset, false);
    const asFlat = transposeNote(m[1], offset, true);
    return FLAT_KEYS.has(asFlat + m[2]) && asFlat !== root ? true : FLAT_KEYS.has(root + m[2]);
  }

  /* ---------------- Chart parsing ----------------
     Supports:
     - [Section] headers on their own line (e.g. [Verse 1], [Chorus])
     - Inline bracket chords:  [Am]Ain't no [Em]sunshine...
     - Plain chord-only lines above lyric lines
     - {c: ...} comment lines
  ------------------------------------------------- */

  function parseChart(text) {
    const lines = text.replace(/\r/g, "").split("\n");
    const out = [];
    for (const raw of lines) {
      const line = raw.replace(/\s+$/, "");
      if (line.trim() === "") { out.push({ type: "blank" }); continue; }

      const cm = line.match(/^\{(?:c|comment):\s*(.*)\}$/i);
      if (cm) { out.push({ type: "comment", text: cm[1] }); continue; }

      const sec = line.match(/^\[([^\]]+)\]$/);
      if (sec && !isChordToken(sec[1])) {
        out.push({ type: "section", text: sec[1] });
        continue;
      }

      if (line.includes("[")) {
        out.push(parseBracketLine(line));
        continue;
      }

      const toks = line.trim().split(/\s+/).filter(t => t !== "|" && t !== "-" && t !== "x2" && t !== "x4" && !/^\(?x\d+\)?$/i.test(t));
      const chordy = toks.length > 0 && toks.every(isChordToken);
      out.push({ type: chordy ? "chords" : "lyric", text: line });
    }
    return out;
  }

  function parseBracketLine(line) {
    // Build aligned chord + lyric strings from [C]inline format
    let chordLine = "", lyricLine = "";
    let i = 0;
    while (i < line.length) {
      if (line[i] === "[") {
        const close = line.indexOf("]", i);
        if (close === -1) { lyricLine += line.slice(i); break; }
        const tok = line.slice(i + 1, close);
        while (chordLine.length < lyricLine.length) chordLine += " ";
        chordLine += tok + " ";
        i = close + 1;
      } else {
        lyricLine += line[i];
        i++;
      }
    }
    return { type: "pair", chords: chordLine.replace(/\s+$/, ""), lyric: lyricLine };
  }

  function transposeLine(text, offset, useFlats) {
    // Runs at offset 0 too: chords still get their accidentals prettified.
    return text.replace(/[A-G][#b♯♭]?[a-zA-Z0-9()#b♯♭+°ø]*(\/[A-G][#b♯♭]?)?/g, tok =>
      isChordToken(tok) ? transposeChord(tok, offset, useFlats) : tok
    );
  }

  function renderChart(text, offset, key) {
    const useFlats = guessFlats(key, offset);
    const parsed = parseChart(text);
    const frag = document.createDocumentFragment();
    for (const ln of parsed) {
      let el;
      switch (ln.type) {
        case "blank":
          el = div("blank"); break;
        case "section":
          el = div("section"); el.textContent = ln.text; break;
        case "comment":
          el = div("comment"); el.textContent = ln.text; break;
        case "chords":
          el = div("chords"); el.textContent = transposeLine(ln.text, offset, useFlats); break;
        case "pair":
          el = document.createDocumentFragment();
          if (ln.chords.trim()) {
            const c = div("chords"); c.textContent = transposeLine(ln.chords, offset, useFlats); el.appendChild(c);
          }
          if (ln.lyric.trim()) {
            const l = div("lyric"); l.textContent = ln.lyric; el.appendChild(l);
          }
          break;
        default:
          el = div("lyric"); el.textContent = ln.text;
      }
      frag.appendChild(el);
    }
    return frag;
  }

  function div(cls) { const d = document.createElement("div"); d.className = cls; return d; }

  /* ---------------- Router ---------------- */

  window.addEventListener("hashchange", route);

  // Clicking a nav link whose target matches the current hash won't fire
  // `hashchange`, so re-route manually to keep the UI snappy.
  document.querySelectorAll("a.tab, a.lockup, a.crumb").forEach(a => {
    a.addEventListener("click", () => {
      const target = a.getAttribute("href") || "";
      if (location.hash === target) setTimeout(route, 0);
    });
  });

  route();

  function route() {
    stopAutoScroll();
    const hash = location.hash || "#/songs";
    const parts = hash.replace(/^#\//, "").split("/");
    setActiveTab(parts[0] === "gigs" ? "gigs" : "songs");
    if (parts[0] === "song" && parts[1]) renderSong(decodeURIComponent(parts[1]));
    else if (parts[0] === "gigs") renderGigs();
    else renderSongbook();
    window.scrollTo(0, 0);
    app.focus({ preventScroll: true });
  }

  function setActiveTab(name) {
    document.querySelectorAll(".tab").forEach(t =>
      t.classList.toggle("active", t.dataset.tab === name));
  }

  /* ---------------- Songbook ---------------- */

  function renderSongbook(filter) {
    const q = (filter || "").toLowerCase();
    const songs = SONGS
      .filter(s => !q || (s.title + " " + (s.artist || "") + " " + (s.key || "")).toLowerCase().includes(q))
      .sort((a, b) => a.title.localeCompare(b.title));

    app.innerHTML = `
      <div id="next-gig-slot"></div>
      <h1 class="page-title">Songbook</h1>
      <p class="page-sub">Tap a song for its chart and practice recording. The amber dot means a recording is up.</p>
      <div class="search-row">
        <input class="search" id="search" type="search" aria-label="Search songs" placeholder="Search title, artist, or key…" value="${escapeAttr(filter || "")}" autocomplete="off">
      </div>
      <div class="song-list" id="song-list"></div>
    `;

    renderNextGigHero(document.getElementById("next-gig-slot"));
    const list = document.getElementById("song-list");
    if (!songs.length) {
      list.innerHTML = `<p class="empty-note">No songs match. Add songs in <code>data/songs.js</code>.</p>`;
    }
    for (const s of songs) {
      const a = document.createElement("a");
      a.className = "song-row";
      a.href = "#/song/" + encodeURIComponent(s.id);
      a.innerHTML = `
        <span class="song-main">
          <span class="song-title">${escapeHtml(s.title)}</span><br>
          <span class="song-artist">${escapeHtml(s.artist || "")}</span>
        </span>
        <span class="song-tempo">${s.tempo ? escapeHtml(String(s.tempo)) + " bpm" : ""}</span>
        <span class="badge-key">${escapeHtml(s.key || "—")}</span>
        <span class="audio-dot ${s.audio ? "has" : ""}" aria-hidden="true"></span><span class="sr-only">${s.audio ? "Recording available" : "No recording yet"}</span>
      `;
      list.appendChild(a);
    }

    const search = document.getElementById("search");
    search.addEventListener("input", () => {
      renderSongbookRows(search.value);
    });

    function renderSongbookRows(val) {
      // re-render only the list, keep focus in the input
      const q2 = val.toLowerCase();
      list.innerHTML = "";
      const filtered = SONGS
        .filter(s => !q2 || (s.title + " " + (s.artist || "") + " " + (s.key || "")).toLowerCase().includes(q2))
        .sort((a, b) => a.title.localeCompare(b.title));
      if (!filtered.length) list.innerHTML = `<p class="empty-note">No songs match.</p>`;
      for (const s of filtered) {
        const a = document.createElement("a");
        a.className = "song-row";
        a.href = "#/song/" + encodeURIComponent(s.id);
        a.innerHTML = `
          <span class="song-main">
            <span class="song-title">${escapeHtml(s.title)}</span><br>
            <span class="song-artist">${escapeHtml(s.artist || "")}</span>
          </span>
          <span class="song-tempo">${s.tempo ? escapeHtml(String(s.tempo)) + " bpm" : ""}</span>
          <span class="badge-key">${escapeHtml(s.key || "—")}</span>
          <span class="audio-dot ${s.audio ? "has" : ""}" aria-hidden="true"></span><span class="sr-only">${s.audio ? "Recording available" : "No recording yet"}</span>
        `;
        list.appendChild(a);
      }
    }
  }

  /* ---------------- Song view ---------------- */

  function renderSong(id) {
    const song = SONGS.find(s => s.id === id);
    if (!song) { app.innerHTML = `<p class="empty-note">Song not found. <a href="#/songs">Back to the songbook</a>.</p>`; hidePlayer(); return; }
    transpose = 0;

    const chart = CHARTS[song.id] || "";

    app.innerHTML = `
      <a class="crumb" href="#/songs">&larr; Songbook</a>
      <div class="song-head">
        <h1 class="page-title">${escapeHtml(song.title)}</h1>
      </div>
      <p class="song-meta">
        ${song.artist ? escapeHtml(song.artist) + " &middot; " : ""}
        Key <strong id="key-display">${escapeHtml(song.key || "?")}</strong>
        ${song.capo ? " &middot; Capo " + escapeHtml(String(song.capo)) : ""}
        ${song.tempo ? " &middot; " + escapeHtml(String(song.tempo)) + " bpm" : ""}
        ${song.notes ? " &middot; " + escapeHtml(song.notes) : ""}
      </p>

      <div class="chart-toolbar" role="toolbar" aria-label="Chart tools">
        <div class="tool-group">
          <span class="tool-label">Transpose</span>
          <button class="tool-btn" id="tr-down" aria-label="Transpose down">&minus;</button>
          <span class="tool-value" id="tr-val" aria-live="polite" aria-label="Transpose amount">0</span>
          <button class="tool-btn" id="tr-up" aria-label="Transpose up">+</button>
          <button class="tool-btn" id="tr-reset">Reset</button>
        </div>
        <div class="tool-group">
          <span class="tool-label">Size</span>
          <button class="tool-btn" id="sz-down" aria-label="Smaller text">A&minus;</button>
          <button class="tool-btn" id="sz-up" aria-label="Larger text">A+</button>
        </div>
        <span class="tool-spacer"></span>
        ${song.chordsheet ? `<a class="tool-btn tool-link" href="${escapeAttr(song.chordsheet)}" target="_blank" rel="noopener">Chordsheet &#8599;</a>` : ""}
        <div class="tool-group">
          <button class="tool-btn" id="autoscroll" aria-pressed="false">Auto-scroll</button>
          <button class="tool-btn" id="scroll-slower" aria-label="Auto-scroll slower">&#9660;</button>
          <button class="tool-btn" id="scroll-faster" aria-label="Auto-scroll faster">&#9650;</button>
        </div>
      </div>
      ${song.chartPdf ? `
      <div class="chart-pdf">
        <object data="${escapeAttr(song.chartPdf)}" type="application/pdf" aria-label="Chord sheet PDF">
          <p class="comment" style="padding:16px">PDF preview not supported in this browser —
          <a href="${escapeAttr(song.chartPdf)}" target="_blank" rel="noopener">open the chart PDF</a>.</p>
        </object>
      </div>` : ""}
      <div class="chart-sheet" id="chart"></div>
    `;

    const chartEl = document.getElementById("chart");
    const drawChart = () => {
      chartEl.innerHTML = "";
      if (!chart.trim()) {
        if (song.chartPdf) { chartEl.style.display = "none"; return; }
        chartEl.innerHTML = `<div class="comment">No chart yet — add one in data/charts.js under "${escapeHtml(song.id)}".</div>`;
        return;
      }
      chartEl.appendChild(renderChart(chart, transpose, song.key));
      document.getElementById("tr-val").textContent = (transpose > 0 ? "+" : "") + transpose;
      document.getElementById("key-display").textContent = transposedKey(song.key, transpose) || "?";
    };
    drawChart();

    document.getElementById("tr-up").onclick = () => { transpose = Math.min(11, transpose + 1); drawChart(); };
    document.getElementById("tr-down").onclick = () => { transpose = Math.max(-11, transpose - 1); drawChart(); };
    document.getElementById("tr-reset").onclick = () => { transpose = 0; drawChart(); };

    document.getElementById("sz-up").onclick = () => bumpChartSize(1);
    document.getElementById("sz-down").onclick = () => bumpChartSize(-1);

    let speed = 0.6; // px per tick
    const asBtn = document.getElementById("autoscroll");
    asBtn.onclick = () => {
      if (scrollTimer) { stopAutoScroll(); asBtn.setAttribute("aria-pressed", "false"); }
      else {
        asBtn.setAttribute("aria-pressed", "true");
        scrollTimer = setInterval(() => window.scrollBy(0, speed), 30);
      }
    };
    document.getElementById("scroll-faster").onclick = () => { speed = Math.min(4, speed + 0.3); };
    document.getElementById("scroll-slower").onclick = () => { speed = Math.max(0.15, speed - 0.3); };

    // Player
    if (song.audio) showPlayer(song);
    else hidePlayer();
  }

  function bumpChartSize(dir) {
    const cur = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--chart-size"));
    const next = Math.min(24, Math.max(10, cur + dir));
    document.documentElement.style.setProperty("--chart-size", next + "px");
  }

  function stopAutoScroll() {
    if (scrollTimer) { clearInterval(scrollTimer); scrollTimer = null; }
  }

  /* ---------------- Player ---------------- */

  function showPlayer(song) {
    playerTitle.textContent = song.title + (song.artist ? " — " + song.artist : "");
    playerAudio.src = song.audio;
    playerBar.hidden = false;
    playerAudio.onerror = () => {
      playerTitle.textContent = song.title + " — recording file not found (" + song.audio + ")";
    };
  }
  function hidePlayer() {
    playerBar.hidden = true;
    playerAudio.pause();
    playerAudio.removeAttribute("src");
  }

  /* ---------------- Gigs ---------------- */

  function nextGig() {
    const now = new Date(); now.setHours(0, 0, 0, 0);
    return GIGS.slice()
      .map(g => ({ ...g, _d: new Date(g.date + "T00:00:00") }))
      .filter(g => g._d >= now)
      .sort((a, b) => a._d - b._d)[0];
  }

  function renderNextGigHero(container) {
    const g = nextGig();
    if (!g) return;
    const d = g._d;
    const sets = (g.sets || []).reduce((n, s) => n + (s.songs || []).length, 0);
    const hero = document.createElement("a");
    hero.className = "next-gig-hero";
    hero.href = "#/gigs";
    hero.innerHTML = `
      <span class="ngh-eyebrow">Next up</span>
      <span class="ngh-when">
        <span class="ngh-day">${d.getDate()}</span>
        <span class="ngh-mon">${MONTHS[d.getMonth()]}</span>
      </span>
      <span class="ngh-body">
        <span class="ngh-venue">${escapeHtml(g.venue)}</span>
        <span class="ngh-line">${escapeHtml(g.city || "")}${g.time ? " · " + escapeHtml(g.time) : ""}${g.loadIn ? " · Load-in " + escapeHtml(g.loadIn) : ""}</span>
        ${g.notes ? `<span class="ngh-notes">${escapeHtml(g.notes)}</span>` : ""}
        <span class="ngh-sets">${sets ? sets + " song" + (sets === 1 ? "" : "s") + " in the set" : "Setlist TBD"}</span>
      </span>
    `;
    container.appendChild(hero);
  }

  function renderGigs() {
    hidePlayer();
    const now = new Date(); now.setHours(0, 0, 0, 0);
    const gigs = GIGS.slice().map(g => ({ ...g, _d: new Date(g.date + "T00:00:00") }));
    const upcoming = gigs.filter(g => g._d >= now).sort((a, b) => a._d - b._d);
    const past = gigs.filter(g => g._d < now).sort((a, b) => b._d - a._d);

    app.innerHTML = `
      <h1 class="page-title">Gigs</h1>
      <div id="gig-list"></div>
    `;
    const list = document.getElementById("gig-list");

    if (upcoming.length) {
      list.appendChild(groupTitle("Upcoming"));
      upcoming.forEach((g, i) => list.appendChild(gigCard(g, i === 0, false)));
    } else {
      list.appendChild(groupTitle("Upcoming"));
      const p = document.createElement("p");
      p.className = "empty-note";
      p.textContent = "Nothing on the calendar. Add gigs in data/gigs.js.";
      list.appendChild(p);
    }
    if (past.length) {
      list.appendChild(groupTitle("Past"));
      past.forEach(g => list.appendChild(gigCard(g, false, true)));
    }
  }

  function groupTitle(text) {
    const h = document.createElement("h2");
    h.className = "gig-group-title";
    h.textContent = text;
    return h;
  }

  function gigCard(g, isNext, isPast) {
    const card = document.createElement("article");
    card.className = "gig-card" + (isPast ? " past" : "");
    const d = g._d;
    const sets = g.sets || [];
    const setsHtml = sets.map((set, idx) => {
      const items = set.songs.map(sid => {
        const s = SONGS.find(x => x.id === sid);
        return s
          ? `<li><a href="#/song/${encodeURIComponent(s.id)}">${escapeHtml(s.title)}</a><span class="set-key">${escapeHtml(s.key || "")}</span></li>`
          : `<li>${escapeHtml(sid)}</li>`;
      }).join("");
      return `<div class="set">
        <div class="setlist-title">${escapeHtml(set.name || "Set " + (idx + 1))}</div>
        <ol>${items}</ol>
      </div>`;
    }).join("");

    // The keyless `output=embed` map takes a plain query — prefer the street
    // address, fall back to the venue name so a gig without one still maps.
    const mapQuery = g.address || [g.venue, g.city].filter(Boolean).join(", ");
    const mapSrc = "https://www.google.com/maps?q=" + encodeURIComponent(mapQuery) + "&output=embed";
    const mapHref = g.mapUrl || "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(mapQuery);
    const mapHtml = mapQuery ? `
      <div class="gig-map">
        <iframe src="${escapeAttr(mapSrc)}" title="Map — ${escapeAttr(g.venue)}"
                loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
      </div>` : "";

    card.innerHTML = `
      <div class="gig-date">
        <span class="mon">${MONTHS[d.getMonth()]}</span>
        <span class="day">${d.getDate()}</span>
        <span class="dow">${DOWS[d.getDay()].slice(0, 3)}</span>
      </div>
      <div class="gig-body">
        <div class="gig-venue">${escapeHtml(g.venue)}${isNext ? '<span class="tag-next">Next up</span>' : ""}</div>
        <div class="gig-line">${escapeHtml(g.city || "")}${g.time ? " · " + escapeHtml(g.time) : ""}${g.loadIn ? " · Load-in " + escapeHtml(g.loadIn) : ""}</div>
        ${g.address ? `<div class="gig-address">${escapeHtml(g.address)}<a class="gig-directions" href="${escapeAttr(mapHref)}" target="_blank" rel="noopener noreferrer">Directions ↗</a></div>` : ""}
        ${g.notes ? `<div class="gig-notes">${escapeHtml(g.notes)}</div>` : ""}
        ${mapHtml}
        ${setsHtml ? `<div class="setlist">${setsHtml}</div>` : ""}
      </div>
    `;
    return card;
  }

  /* ---------------- Utils ---------------- */

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function escapeAttr(s) { return escapeHtml(s); }

})();
