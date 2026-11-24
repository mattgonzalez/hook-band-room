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
  const playerTrack = document.getElementById("player-track");
  const mixerEl = document.getElementById("mixer");

  const SONGS = window.SONGS || [];
  const CHARTS = window.CHARTS || {};
  const GIGS = window.GIGS || [];
  const BAND = window.BAND || {};

  const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const DOWS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  // Recording fields on a song, in player dropdown order.
  const TRACKS = [
    { field: "original", label: "Original" },
    { field: "drumBass", label: "Drum + bass" },
    { field: "noDrums", label: "No drums" }
  ];
  // Stem slots for the mixer, in strip order. A song's `stems` object uses these keys.
  const STEMS = [
    { key: "vocals", label: "Vocals" },
    { key: "drums",  label: "Drums" },
    { key: "bass",   label: "Bass" },
    { key: "guitar", label: "Guitar" },
    { key: "piano",  label: "Piano" },
    { key: "other",  label: "Other" }
  ];

  document.getElementById("song-count").textContent =
    SONGS.length + " songs in the book";

  /* ---------------- Chords ---------------- */

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

  function transposeNote(note, useFlats) {
    const idx = NOTE_INDEX[note];
    if (idx === undefined) return note;
    return useFlats ? FLATS[idx] : SHARPS[idx];
  }

  function prettifyChord(chord) {
    const m = ascii(chord).match(CHORD_RE);
    if (!m) return chord;
    // Keep the chart author's enharmonic spelling — only prettify it.
    return pretty(m[0]);
  }

  function prettifyKey(key) {
    if (!key) return "";
    const m = ascii(key).match(/^([A-G][#b]?)(m?)$/);
    if (!m) return key;
    const useFlats = guessFlats(key);
    return pretty(transposeNote(m[1], useFlats) + m[2]);
  }

  function guessFlats(key) {
    const m = ascii(key).match(/^([A-G][#b]?)(m?)$/);
    if (!m) return false;
    const root = transposeNote(m[1], false);
    const asFlat = transposeNote(m[1], true);
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

  function prettifyLine(text) {
    return text.replace(/[A-G][#b♯♭]?[a-zA-Z0-9()#b♯♭+°ø]*(\/[A-G][#b♯♭]?)?/g, tok =>
      isChordToken(tok) ? prettifyChord(tok) : tok
    );
  }

  function renderChart(text) {
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
          el = div("chords"); el.textContent = prettifyLine(ln.text); break;
        case "pair":
          el = document.createDocumentFragment();
          if (ln.chords.trim()) {
            const c = div("chords"); c.textContent = prettifyLine(ln.chords); el.appendChild(c);
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


  function route() {
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
        <span class="audio-dot ${hasAudio(s) ? "has" : ""}" aria-hidden="true"></span><span class="sr-only">${hasAudio(s) ? "Recording available" : "No recording yet"}</span>
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
          <span class="audio-dot ${hasAudio(s) ? "has" : ""}" aria-hidden="true"></span><span class="sr-only">${hasAudio(s) ? "Recording available" : "No recording yet"}</span>
        `;
        list.appendChild(a);
      }
    }
  }

  /* ---------------- Song view ---------------- */

  function renderSong(id) {
    const song = SONGS.find(s => s.id === id);
    if (!song) { app.innerHTML = `<p class="empty-note">Song not found. <a href="#/songs">Back to the songbook</a>.</p>`; hidePlayer(); return; }
    const chart = CHARTS[song.id] || "";

    app.innerHTML = `
      <a class="crumb" href="#/songs">&larr; Songbook</a>
      <div class="song-head">
        <h1 class="page-title">${escapeHtml(song.title)}</h1>
      </div>
      <p class="song-meta">
        ${song.artist ? escapeHtml(song.artist) + " &middot; " : ""}
        Key <strong>${escapeHtml(prettifyKey(song.key) || "?")}</strong>
        ${song.capo ? " &middot; Capo " + escapeHtml(String(song.capo)) : ""}
        ${song.tempo ? " &middot; " + escapeHtml(String(song.tempo)) + " bpm" : ""}
        ${song.notes ? " &middot; " + escapeHtml(song.notes) : ""}
      </p>

      ${song.chordsheet ? `
      <div class="chart-toolbar" role="toolbar" aria-label="Chart tools">
        <a class="tool-btn tool-link" href="${escapeAttr(song.chordsheet)}" target="_blank" rel="noopener">Chordsheet &#8599;</a>
      </div>` : ""}
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
    if (!chart.trim()) {
      if (song.chartPdf) { chartEl.style.display = "none"; }
      else chartEl.innerHTML = `<div class="comment">No chart yet — add one in data/charts.js under "${escapeHtml(song.id)}".</div>`;
    } else {
      chartEl.appendChild(renderChart(chart));
    }

    // Player
    if (hasAudio(song)) showPlayer(song);
    else hidePlayer();
  }

  /* ---------------- Player ---------------- */
  // Two modes share the fixed #player-bar:
  //   - Stem mixer: when a song has `stems`, every stem is decoded into an
  //     AudioBuffer and all of them start on the same AudioContext clock, so
  //     they stay sample-locked. Each stem runs source -> gain -> analyser ->
  //     destination; volume/mute/solo only move the gain.
  //   - Legacy single-track player: songs without stems keep the
  //     Original / Drum + bass / No drums dropdown and <audio> element.

  function hasStems(song) {
    return !!(song && song.stems && STEMS.some(s => song.stems[s.key]));
  }
  function hasAudio(song) {
    return hasStems(song) || TRACKS.some(t => song[t.field]);
  }

  function showPlayer(song) {
    const label = song.title + (song.artist ? " — " + song.artist : "");
    playerTitle.textContent = label;
    playerBar.hidden = false;
    if (hasStems(song)) {
      playerBar.classList.add("is-mixer");
      playerAudio.pause();
      playerAudio.removeAttribute("src");
      playerTrack.innerHTML = "";
      mixerShow(song);
    } else {
      playerBar.classList.remove("is-mixer");
      mixerUnload();
      showTrackPlayer(song);
    }
    syncPlayerHeight();
  }
  function showTrackPlayer(song) {
    const tracks = TRACKS.filter(t => song[t.field]);
    // List every track type; ones this song lacks are shown but disabled.
    playerTrack.innerHTML = TRACKS
      .map(t => song[t.field]
        ? `<option value="${escapeAttr(t.field)}">${escapeHtml(t.label)}</option>`
        : `<option value="${escapeAttr(t.field)}" disabled>${escapeHtml(t.label)} (none yet)</option>`)
      .join("");
    playerTrack.onchange = () => selectTrack(song, tracks.find(t => t.field === playerTrack.value));
    // Default to a play-along track when there is one.
    selectTrack(song, tracks.find(t => t.field !== "original") || tracks[0]);
  }
  function selectTrack(song, track) {
    const src = song[track.field];
    playerTrack.value = track.field;
    const label = song.title + (song.artist ? " — " + song.artist : "");
    playerTitle.textContent = label;
    const wasPlaying = !playerAudio.paused;
    playerAudio.onerror = () => {
      playerTitle.textContent = label + " — " + track.label.toLowerCase() + " file not found (" + src + ")";
    };
    playerAudio.src = src;
    if (wasPlaying) playerAudio.play().catch(() => {});
  }
  function hidePlayer() {
    playerBar.hidden = true;
    playerBar.classList.remove("is-mixer");
    playerAudio.pause();
    playerAudio.removeAttribute("src");
    playerTrack.innerHTML = "";
    mixerUnload();
    syncPlayerHeight();
  }

  // Keep page content clear of the fixed bar, whose height depends on mode
  // and on whether the mixer strips are expanded.
  function syncPlayerHeight() {
    const h = playerBar.hidden ? 0 : playerBar.offsetHeight;
    document.documentElement.style.setProperty("--player-h", h + "px");
  }
  if (window.ResizeObserver) new ResizeObserver(syncPlayerHeight).observe(playerBar);

  /* ---------------- Stem mixer ---------------- */

  const DB_MIN = -60;   // slider bottom = off
  const DB_MAX = 6;
  const mx = {
    ctx: null,
    songId: null,
    stems: [],          // [{ key, label, src, buffer, gain, analyser, el, error }]
    sources: [],
    loading: null,      // Promise while fetching/decoding
    loadToken: 0,
    playing: false,
    startAt: 0,         // ctx time at which song position 0 would have played
    offset: 0,          // song position (s) while paused
    duration: 0,
    seeking: false,
    raf: 0,
    mix: {}             // key -> { db, mute, solo }
  };

  function mixerCtx() {
    if (!mx.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      // iOS mutes Web Audio with the ring/silent switch unless the session
      // is declared as media playback (Safari 16.4+).
      try { if (navigator.audioSession) navigator.audioSession.type = "playback"; } catch (e) {}
      mx.ctx = new AC();
    }
    return mx.ctx;
  }

  function mixKey(id) { return "hook-mix:" + id; }
  function loadMix(id) {
    try { return JSON.parse(localStorage.getItem(mixKey(id))) || {}; } catch (e) { return {}; }
  }
  function saveMix() {
    try { localStorage.setItem(mixKey(mx.songId), JSON.stringify(mx.mix)); } catch (e) {}
  }
  function stripsCollapsed() {
    try { return localStorage.getItem("hook-mixer-collapsed") === "1"; } catch (e) { return false; }
  }

  function mixerShow(song) {
    if (mx.songId === song.id) return;   // same song: keep loaded buffers and position
    mixerUnload();
    mx.songId = song.id;
    const saved = loadMix(song.id);
    mx.mix = {};
    mx.stems = STEMS.map(s => {
      const m = saved[s.key] || {};
      mx.mix[s.key] = {
        db: typeof m.db === "number" ? Math.max(DB_MIN, Math.min(DB_MAX, m.db)) : 0,
        mute: !!m.mute,
        solo: !!m.solo
      };
      return { key: s.key, label: s.label, src: song.stems[s.key] || null, buffer: null, gain: null, analyser: null, el: null, error: null };
    });
    renderMixer();
  }

  function mixerUnload() {
    mx.loadToken++;
    mixerStopSources();
    cancelAnimationFrame(mx.raf);
    mx.stems.forEach(s => { s.buffer = null; if (s.gain) s.gain.disconnect(); if (s.analyser) s.analyser.disconnect(); });
    mx.stems = [];
    mx.songId = null;
    mx.loading = null;
    mx.playing = false;
    mx.offset = 0;
    mx.duration = 0;
    mixerEl.innerHTML = "";
  }

  function renderMixer() {
    const collapsed = stripsCollapsed();
    mixerEl.innerHTML = `
      <div class="mx-transport">
        <button type="button" class="mx-btn mx-play" id="mx-play" aria-label="Play">&#9654;</button>
        <span class="mx-time" id="mx-pos">0:00</span>
        <input type="range" class="mx-seek" id="mx-seek" min="0" max="1000" step="1" value="0" aria-label="Song position" disabled>
        <span class="mx-time" id="mx-dur">--:--</span>
        <button type="button" class="mx-btn mx-collapse" id="mx-collapse" aria-expanded="${!collapsed}" aria-controls="mx-strips">${collapsed ? "Show mixer" : "Hide mixer"}</button>
      </div>
      <p class="mx-status" id="mx-status" role="status"></p>
      <div class="mx-strips" id="mx-strips" ${collapsed ? "hidden" : ""}>
        ${mx.stems.map(s => {
          const m = mx.mix[s.key];
          const off = !s.src;
          return `
          <div class="mx-strip${off ? " is-empty" : ""}" data-stem="${escapeAttr(s.key)}" ${off ? 'title="No stem uploaded yet"' : ""}>
            <div class="mx-strip-head">
              <span class="mx-name">${escapeHtml(s.label)}</span>
              <button type="button" class="mx-btn mx-mute" aria-pressed="${m.mute}" aria-label="Mute ${escapeAttr(s.label)}" ${off ? "disabled" : ""}>M</button>
              <button type="button" class="mx-btn mx-solo" aria-pressed="${m.solo}" aria-label="Solo ${escapeAttr(s.label)}" ${off ? "disabled" : ""}>S</button>
            </div>
            <input type="range" class="mx-vol" min="${DB_MIN}" max="${DB_MAX}" step="0.5" value="${m.db}" aria-label="${escapeAttr(s.label)} volume" ${off ? "disabled" : ""}>
            <div class="mx-meter" aria-hidden="true"><span></span></div>
            <span class="mx-db">${off ? "none yet" : fmtDb(m.db)}</span>
          </div>`;
        }).join("")}
      </div>
    `;
    mx.stems.forEach(s => { s.el = mixerEl.querySelector(`.mx-strip[data-stem="${s.key}"]`); });

    const playBtn = document.getElementById("mx-play");
    const seek = document.getElementById("mx-seek");
    playBtn.onclick = () => (mx.playing ? mixerPause() : mixerPlay());
    seek.oninput = () => { mx.seeking = true; setTimeLabels(seek.value / 1000 * mx.duration); };
    seek.onchange = () => { mx.seeking = false; mixerSeek(seek.value / 1000 * mx.duration); };
    document.getElementById("mx-collapse").onclick = (e) => {
      const strips = document.getElementById("mx-strips");
      strips.hidden = !strips.hidden;
      e.currentTarget.setAttribute("aria-expanded", String(!strips.hidden));
      e.currentTarget.textContent = strips.hidden ? "Show mixer" : "Hide mixer";
      try { localStorage.setItem("hook-mixer-collapsed", strips.hidden ? "1" : "0"); } catch (err) {}
      syncPlayerHeight();
    };

    mx.stems.forEach(s => {
      if (!s.src) return;
      const m = mx.mix[s.key];
      const vol = s.el.querySelector(".mx-vol");
      const db = s.el.querySelector(".mx-db");
      vol.oninput = () => { m.db = Number(vol.value); db.textContent = fmtDb(m.db); applyGains(); saveMix(); };
      // Double-click the fader or readout to snap back to unity.
      const reset = () => { m.db = 0; vol.value = 0; db.textContent = fmtDb(0); applyGains(); saveMix(); };
      vol.ondblclick = reset;
      db.ondblclick = reset;
      s.el.querySelector(".mx-mute").onclick = (e) => {
        m.mute = !m.mute; e.currentTarget.setAttribute("aria-pressed", String(m.mute)); applyGains(); saveMix();
      };
      s.el.querySelector(".mx-solo").onclick = (e) => {
        m.solo = !m.solo; e.currentTarget.setAttribute("aria-pressed", String(m.solo)); applyGains(); saveMix();
      };
    });
    applyGains();
  }

  function fmtDb(db) {
    if (db <= DB_MIN) return "off";
    return (db > 0 ? "+" : "") + db.toFixed(1) + " dB";
  }
  function fmtTime(t) {
    if (!isFinite(t)) return "--:--";
    t = Math.max(0, Math.floor(t));
    return Math.floor(t / 60) + ":" + String(t % 60).padStart(2, "0");
  }
  function setTimeLabels(pos) {
    const p = document.getElementById("mx-pos");
    if (p) p.textContent = fmtTime(pos);
  }
  function setStatus(msg) {
    const el = document.getElementById("mx-status");
    if (el) { el.textContent = msg || ""; el.hidden = !msg; syncPlayerHeight(); }
  }

  // Effective gain: mute wins; if anything is soloed, only soloed stems play.
  function applyGains() {
    const anySolo = mx.stems.some(s => s.src && mx.mix[s.key].solo);
    mx.stems.forEach(s => {
      if (!s.src) return;
      const m = mx.mix[s.key];
      const audible = !m.mute && (!anySolo || m.solo);
      if (s.el) s.el.classList.toggle("is-silent", !audible);
      if (!s.gain) return;
      const g = audible && m.db > DB_MIN ? Math.pow(10, m.db / 20) : 0;
      // Short ramp so mute/solo/fader moves don't click.
      s.gain.gain.setTargetAtTime(g, mx.ctx.currentTime, 0.012);
    });
  }

  function mixerLoad() {
    if (mx.loading) return mx.loading;
    const ctx = mixerCtx();
    if (!ctx) { setStatus("This browser doesn't support Web Audio."); return Promise.reject(); }
    const token = mx.loadToken;
    const wanted = mx.stems.filter(s => s.src);
    let done = 0;
    setStatus(`Loading stems 0/${wanted.length}…`);
    mx.loading = Promise.all(wanted.map(s =>
      fetch(s.src)
        .then(r => { if (!r.ok) throw new Error(r.status + " " + r.statusText); return r.arrayBuffer(); })
        // Older Safari only has the callback form of decodeAudioData.
        .then(data => new Promise((res, rej) => ctx.decodeAudioData(data, res, rej)))
        .then(buf => { if (token === mx.loadToken) s.buffer = buf; })
        .catch(err => { s.error = err && err.message ? err.message : "could not load"; })
        .finally(() => { if (token === mx.loadToken) setStatus(`Loading stems ${++done}/${wanted.length}…`); })
    )).then(() => {
      if (token !== mx.loadToken) throw new Error("stale");
      mx.stems.forEach(s => {
        if (!s.buffer) return;
        s.gain = ctx.createGain();
        s.analyser = ctx.createAnalyser();
        s.analyser.fftSize = 512;
        s.gain.connect(s.analyser).connect(ctx.destination);
      });
      applyGains();
      const loaded = mx.stems.filter(s => s.buffer);
      mx.duration = loaded.reduce((d, s) => Math.max(d, s.buffer.duration), 0);
      document.getElementById("mx-dur").textContent = fmtTime(mx.duration);
      document.getElementById("mx-seek").disabled = !loaded.length;
      const failed = mx.stems.filter(s => s.src && !s.buffer);
      failed.forEach(f => {
        f.el.classList.add("is-error");
        f.el.querySelector(".mx-db").textContent = "missing";
        f.el.title = f.src + " — " + f.error;
      });
      if (!loaded.length) {
        mx.loading = null;   // allow a retry
        setStatus(location.protocol === "file:"
          ? "Stems can't load from a file:// page. Serve the folder (python3 -m http.server) or use the live site."
          : "Couldn't load any stems for this song.");
        throw new Error("no stems");
      }
      setStatus(failed.length
        ? "Couldn't load: " + failed.map(f => f.label).join(", ") + " (hover the strip for details)."
        : "");
    });
    return mx.loading;
  }

  function mixerPlay() {
    const ctx = mixerCtx();
    if (!ctx) return;
    // resume() must be called from the click itself for iOS/Chrome autoplay rules.
    if (ctx.state !== "running") ctx.resume();
    const btn = document.getElementById("mx-play");
    if (btn) btn.disabled = true;
    const token = mx.loadToken;
    mixerLoad().then(() => {
      if (token !== mx.loadToken) return;
      if (mx.offset >= mx.duration) mx.offset = 0;
      mixerStartSources(mx.offset);
    }).catch(() => {}).finally(() => {
      const b = document.getElementById("mx-play");
      if (b && token === mx.loadToken) b.disabled = false;
    });
  }

  function mixerStartSources(offset) {
    const ctx = mx.ctx;
    mixerStopSources();
    // Schedule every stem for the same instant a few ms ahead so they start together.
    const when = ctx.currentTime + 0.06;
    mx.sources = mx.stems.filter(s => s.buffer).map(s => {
      const src = ctx.createBufferSource();
      src.buffer = s.buffer;
      src.connect(s.gain);
      if (offset < s.buffer.duration) src.start(when, offset);
      return src;
    });
    mx.startAt = when - offset;
    mx.playing = true;
    updatePlayButton();
    cancelAnimationFrame(mx.raf);
    mx.raf = requestAnimationFrame(mixerTick);
  }

  function mixerStopSources() {
    mx.sources.forEach(src => { try { src.stop(); } catch (e) {} src.disconnect(); });
    mx.sources = [];
  }

  function mixerPosition() {
    return mx.playing ? Math.min(mx.duration, mx.ctx.currentTime - mx.startAt) : mx.offset;
  }

  function mixerPause() {
    if (!mx.playing) return;
    mx.offset = mixerPosition();
    mixerStopSources();
    mx.playing = false;
    updatePlayButton();
  }

  function mixerSeek(t) {
    t = Math.max(0, Math.min(mx.duration || 0, t));
    if (mx.playing) mixerStartSources(t);
    else { mx.offset = t; setTimeLabels(t); }
  }

  function updatePlayButton() {
    const btn = document.getElementById("mx-play");
    if (!btn) return;
    btn.innerHTML = mx.playing ? "&#10074;&#10074;" : "&#9654;";
    btn.setAttribute("aria-label", mx.playing ? "Pause" : "Play");
  }

  const meterData = new Float32Array(512);
  function mixerTick() {
    if (!mx.playing) { resetMeters(); return; }
    const pos = mixerPosition();
    if (pos >= mx.duration) {
      mixerPause();
      mx.offset = 0;
      setTimeLabels(0);
      const seek = document.getElementById("mx-seek");
      if (seek) seek.value = 0;
      resetMeters();
      return;
    }
    if (!mx.seeking) {
      setTimeLabels(pos);
      const seek = document.getElementById("mx-seek");
      if (seek && mx.duration) seek.value = Math.round(pos / mx.duration * 1000);
    }
    mx.stems.forEach(s => {
      if (!s.analyser || !s.el) return;
      s.analyser.getFloatTimeDomainData(meterData);
      let peak = 0;
      for (let i = 0; i < meterData.length; i++) { const v = Math.abs(meterData[i]); if (v > peak) peak = v; }
      // Map -48..0 dBFS onto the meter width.
      const db = peak > 0 ? 20 * Math.log10(peak) : -Infinity;
      const pct = Math.max(0, Math.min(100, (db + 48) / 48 * 100));
      const bar = s.el.querySelector(".mx-meter span");
      bar.style.width = pct + "%";
      bar.classList.toggle("hot", db > -1);
    });
    mx.raf = requestAnimationFrame(mixerTick);
  }
  function resetMeters() {
    mixerEl.querySelectorAll(".mx-meter span").forEach(b => { b.style.width = "0"; b.classList.remove("hot"); });
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

  function gigChartSongs(g) {
    const seen = new Set();
    const out = [];
    (g.sets || []).forEach(set => {
      (set.songs || []).forEach(sid => {
        const s = SONGS.find(x => x.id === sid);
        if (s && s.chartPdf && !seen.has(s.id)) {
          seen.add(s.id);
          out.push(s);
        }
      });
    });
    return out;
  }

  function gigCard(g, isNext, isPast) {
    const card = document.createElement("article");
    card.className = "gig-card" + (isPast ? " past" : "");
    const d = g._d;
    const sets = g.sets || [];
    const chartSongs = gigChartSongs(g);
    const setsHtml = sets.map((set, idx) => {
      const items = set.songs.map(sid => {
        const s = SONGS.find(x => x.id === sid);
        return s
          ? `<li><a href="#/song/${encodeURIComponent(s.id)}">${escapeHtml(s.title)}</a><span class="set-key">${escapeHtml(s.key || "")}</span>${s.tempo ? `<span class="set-tempo">${escapeHtml(String(s.tempo))} bpm</span>` : ""}</li>`
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
        ${chartSongs.length ? `<button type="button" class="tool-btn gig-download-btn">Download charts (PDF) — ${chartSongs.length}</button>` : ""}
        ${setsHtml ? `<div class="setlist">${setsHtml}</div>` : ""}
      </div>
    `;
    if (chartSongs.length) {
      const btn = card.querySelector(".gig-download-btn");
      btn.addEventListener("click", () => downloadGigCharts(g, chartSongs, btn));
    }
    return card;
  }

  /* ---------------- Bulk PDF download (zips a gig's chart PDFs client-side) ---------------- */

  let jszipLoadPromise = null;
  function ensureJSZip() {
    if (window.JSZip) return Promise.resolve();
    if (jszipLoadPromise) return jszipLoadPromise;
    jszipLoadPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js";
      script.integrity = "sha512-XMVd28F1oH/O71fzwBnV7HucLxVwtxf26XV8P4wPk26EDxuGZ91N8bsOttmnomcCD3CS5ZMRL50H0GgOHvegtg==";
      script.crossOrigin = "anonymous";
      script.referrerPolicy = "no-referrer";
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Couldn't load the zip library — check your connection."));
      document.head.appendChild(script);
    });
    return jszipLoadPromise;
  }

  function pdfFilename(song) {
    const base = song.chartPdf.split("/").pop();
    return base || (song.title + ".pdf");
  }

  function gigZipFilename(g) {
    const venue = (g.venue || "charts").replace(/[^\w\- ]+/g, "").trim().replace(/\s+/g, "-");
    return `${g.date || "gig"}-${venue}-charts.zip`;
  }

  async function downloadGigCharts(g, chartSongs, btn) {
    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Zipping…";
    try {
      await ensureJSZip();
      const zip = new window.JSZip();
      const used = new Set();
      const failed = [];
      for (const song of chartSongs) {
        try {
          const res = await fetch(song.chartPdf);
          if (!res.ok) throw new Error(String(res.status));
          const blob = await res.blob();
          let name = pdfFilename(song);
          if (used.has(name)) name = song.id + ".pdf";
          used.add(name);
          zip.file(name, blob);
        } catch (err) {
          failed.push(song.title);
        }
      }
      if (used.size === 0) throw new Error("No charts could be downloaded.");

      const content = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(content);
      const a = document.createElement("a");
      a.href = url;
      a.download = gigZipFilename(g);
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);

      btn.textContent = failed.length ? `Downloaded (${failed.length} failed)` : "Downloaded ✓";
    } catch (err) {
      console.error(err);
      btn.textContent = "Download failed";
    } finally {
      setTimeout(() => { btn.disabled = false; btn.textContent = originalText; }, 3000);
    }
  }

  /* ---------------- Utils ---------------- */

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function escapeAttr(s) { return escapeHtml(s); }

  // Initial render last, so every const above (mixer state included) is initialised.
  route();
})();
