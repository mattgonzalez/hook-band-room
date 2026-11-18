# The Hook — Band Room

A static band-members site: songbook with chord charts and practice
recordings, plus a gig calendar with setlists. No build step, no
dependencies — plain HTML/CSS/JS, made for GitHub Pages.

## Run it locally

Any static server works:

```bash
cd thehook-site
python3 -m http.server 8080
# open http://localhost:8080
```

(Opening `index.html` directly from the file system also works, since
all data loads via `<script>` tags, not fetch.)

## Adding content

Everything lives in three files:

| File | What it holds |
|---|---|
| `data/songs.js` | The song catalog: title, key, tempo, capo, stems or original/drumBass/noDrums audio, notes |
| `data/charts.js` | One chord chart per song id, as plain text |
| `data/gigs.js` | Gigs with date, venue, logistics, and setlists (lists of song ids) |

**Charts** accept two formats, mixable in the same chart:

1. Inline brackets: `[Am]Lyric goes [Em]here` — the chord renders above
   the syllable it lands on.
2. A chord-only line above a lyric line (classic plain-text charts).

`[Verse 1]` / `[Chorus]` on their own line become section headers, and
`{c: some note}` renders as an italic comment. Transpose, text size, and
auto-scroll are built into the chart view.

**Stem mixer**: give a song up to six stems (Vocals, Drums, Bass,
Guitar, Piano, Other) and the player bar becomes a live mixer: one
transport, plus a strip per stem with a volume fader (−60 to +6 dB,
double-click to snap back to 0 dB), Mute and Solo. Stems are decoded and
started on the same Web Audio clock, so they stay sample-locked. Each
band member's mix is remembered per song in their browser.

Convention: one folder per song id, one file per stem, lower-case names:

```
audio/stems/<song-id>/vocals.m4a
audio/stems/<song-id>/drums.m4a
audio/stems/<song-id>/bass.m4a
audio/stems/<song-id>/guitar.m4a
audio/stems/<song-id>/piano.m4a
audio/stems/<song-id>/other.m4a
```

then list whichever ones exist in `data/songs.js`:

```js
stems: {
  vocals: "audio/stems/i-will-survive/vocals.m4a",
  drums:  "audio/stems/i-will-survive/drums.m4a",
  bass:   "audio/stems/i-will-survive/bass.m4a"
}
```

Missing stems still get a strip, greyed out as "none yet". Bounce every
stem from the same session so they start at the same point and share a
sample rate. AAC (.m4a) around 160 kbps keeps a 5-minute song's six
stems near 35 MB; MP3 works too. Converting Logic stem WAVs:

```bash
ffmpeg -i "Song_Vocals.wav" -c:a aac -b:a 160k -movflags +faststart audio/stems/<id>/vocals.m4a
```

Notes: stems download and decode in full when you first press Play
(a few seconds on Wi-Fi), and decoded stems take roughly 100 MB of
memory per stem for a 5-minute song, so six-stem songs are heavy on
older phones. The mixer needs the site served over http(s) (GitHub
Pages, or `python3 -m http.server` locally); browsers block loading
audio data from a `file://` page.

**Recordings (no stems)**: songs without `stems` keep the single-track
player with three tracks — `original` (the
reference recording), `drumBass` (drums + bass only) and `noDrums` (the
mix minus drums). Drop MP3s into `audio/` and set any of the fields, e.g.
`noDrums: "audio/use-me-no-drums.mp3"`. The player bar has an Original /
Drum + bass / No drums dropdown; a missing track is greyed out. Full URLs (Dropbox direct
links, etc.) also work. GitHub blocks single files over 100 MB and
recommends keeping the repo under ~1 GB — a typical rehearsal MP3 is
5–10 MB, so a full setlist's worth is fine. For long multitrack bounces,
link out instead.

**Gigs**: add an entry to `data/gigs.js`. The site automatically sorts
upcoming vs. past by date and tags the next show.


## Chordsheet.com integration

If you author charts in [Chord Sheet Maker Online](https://www.chordsheet.com/),
two fields in `data/songs.js` connect them:

- `chordsheet`: on chordsheet.com, unlock the sheet's **public URL**
  (Sharing → Public URL, a link like `chordsheet.com/public/ABCDEF`)
  and paste it here. The song's chart toolbar gets an
  "Chordsheet ↗" button; band members can view, transpose, and grab
  the PDF there. Revoking the URL on chordsheet.com kills the link.
- `chartPdf`: download the sheet's PDF, drop it in `charts-pdf/`, and
  point this field at it. The PDF renders embedded in the chart view —
  no dependency on chordsheet.com being up, works offline once cached.

Both can coexist with a text chart in `data/charts.js` (the PDF shows
above the text chart). A sensible pattern: PDF for the tight one-page
form chart, text chart for lyrics + transposition.

## Deploying to GitHub Pages

```bash
git init && git add -A && git commit -m "Band Room"
gh repo create thehook-bandroom --public --source . --push
gh api repos/{owner}/thehook-bandroom/pages -X POST \
  -f 'source[branch]=main' -f 'source[path]=/'
```

Or in the web UI: create a repo, push, then **Settings → Pages →
Deploy from branch → main / (root)**. The site appears at
`https://<user>.github.io/thehook-bandroom/`.

## Access control

GitHub Pages sites are always publicly reachable. Options, in order of
effort:

- **Unlisted**: the page has `noindex, nofollow` set; just don't share
  the URL beyond the band. Fine for charts and rehearsal tapes.
- **Passphrase gate**: a small JS prompt can keep casual visitors out
  (not real security — the content is still in the repo).
- **Real auth**: move hosting to Cloudflare Pages + Access or Netlify
  with password protection. The site itself needs no changes.
