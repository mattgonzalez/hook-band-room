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
| `data/songs.js` | The song catalog: title, key, tempo, capo, audio path, notes |
| `data/charts.js` | One chord chart per song id, as plain text |
| `data/gigs.js` | Gigs with date, venue, logistics, and setlists (lists of song ids) |

**Charts** accept two formats, mixable in the same chart:

1. Inline brackets: `[Am]Lyric goes [Em]here` — the chord renders above
   the syllable it lands on.
2. A chord-only line above a lyric line (classic plain-text charts).

`[Verse 1]` / `[Chorus]` on their own line become section headers, and
`{c: some note}` renders as an italic comment. Transpose, text size, and
auto-scroll are built into the chart view.

**Recordings**: drop MP3s into `audio/` and set the song's `audio`
field, e.g. `"audio/use-me-rehearsal.mp3"`. Full URLs (Dropbox direct
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
