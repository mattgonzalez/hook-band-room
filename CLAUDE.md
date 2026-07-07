# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static band-members site for "The Hook": a songbook with chord charts and practice recordings, plus a gig calendar with setlists. No build step, no dependencies, no package.json — plain HTML/CSS/JS, meant to be deployed as-is to GitHub Pages.

## Running locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

Opening `index.html` directly from the filesystem also works — all data loads via `<script>` tags, not `fetch`, so there's no CORS issue with `file://`.

There is no test suite, linter, or build/bundle step. Verify changes by loading the page in a browser and checking the console.

## Architecture

All content lives in four data files loaded as global script tags (`index.html` loads them in this order: `band.js`, `songs.js`, `charts.js`, `gigs.js`, then `app.js`). Each sets a `window.*` global that `js/app.js` reads defensively (`window.SONGS || []`, etc.):

| File | Global | Holds |
|---|---|---|
| `data/band.js` | `window.BAND` | hero image path, backline/gear list |
| `data/songs.js` | `window.SONGS` | song catalog: id, title, artist, key, tempo, capo, audio path, chordsheet/chartPdf links, notes |
| `data/charts.js` | `window.CHARTS` | one chord chart per song, keyed by song `id`, as a plain-text template string |
| `data/gigs.js` | `window.GIGS` | gigs with date/venue/logistics and `sets: [{ name, songs: [id...] }]` |

Song `id` is the join key across all three: `charts.js` keys off it, `gigs.js` setlists reference it, URLs use it (`#/song/<id>`).

`js/app.js` is a single IIFE with no framework, no build tooling, and no external JS dependencies (fonts are loaded from Google Fonts via `<link>` in `index.html`, but no JS libraries are used). It implements:

- **Hash router** (`route()`): `#/songs` (default), `#/gigs`, `#/song/<id>`. Re-renders `#app` innerHTML per route; no virtual DOM, no diffing.
- **Chart parser + renderer** (`parseChart`, `renderChart`): converts chart text into typed line objects (`blank`, `section`, `comment`, `chords`, `lyric`, `pair`) and back into DOM. Supports two chart authoring styles in the same chart — inline `[Am]bracket` chords and classic chord-line-above-lyric-line — plus `[Section]` headers and `{c: comment}` lines. `isChordToken()` is the heuristic that disambiguates a bracketed section name from a bracketed chord, and a chord-only line from a lyric line that happens to start with a note letter.
- **Transposition** (`transposeChord`, `transposeNote`, `guessFlats`): shifts chord roots by semitone offset (-11..+11) using `NOTE_INDEX`, choosing sharp vs. flat spelling per key via `FLAT_KEYS`. Applied live at render time, not persisted.
- **Chordsheet.com integration**: `song.chordsheet` (public URL) renders a link button in the chart toolbar; `song.chartPdf` (local file in `charts-pdf/`) renders as an embedded `<object>` above the text chart. Both are optional and independent of the plain-text chart.
- **Audio player**: a fixed bottom bar (`#player-bar`) shown when a song has `audio` set (local path under `audio/` or a full URL); swapped in/out on song navigation via `showPlayer`/`hidePlayer`.
- All user-supplied strings (titles, notes, venue names, etc.) are rendered via `escapeHtml`/`escapeAttr` before being interpolated into `innerHTML` — preserve this when adding new fields that render as HTML.

`css/styles.css` is a single stylesheet using CSS custom properties (e.g. `--chart-size`, adjusted live by the text-size buttons via `document.documentElement.style.setProperty`).

## Adding content

- **Songs**: add an entry to `data/songs.js` (see comment header in that file for field meanings) and a matching entry in `data/charts.js` keyed by the same `id`.
- **Chart text format**: inline `[Am]lyric` brackets, or a chord-only line directly above a lyric line. `[Verse 1]` / `[Chorus]` alone on a line become section headers; `{c: note}` becomes an italic comment.
- **Recordings**: drop MP3s into `audio/` and reference them from a song's `audio` field (or use a full URL, e.g. a Dropbox direct link).
- **Gigs**: add an entry to `data/gigs.js`; upcoming vs. past and "next up" tagging are computed automatically from `date`.
- **Chordsheet.com**: `chordsheet` field takes the sheet's public share URL; `chartPdf` takes a path to a PDF dropped into `charts-pdf/`. Either or both can accompany a text chart in `charts.js`.
- **Images**: drop photos into `images/` and reference them from `data/band.js` (`heroImage`, gear `image`); missing files are skipped gracefully (checked via `Image().onload` / `<img onerror>`).

## Access control

The site sets `<meta name="robots" content="noindex, nofollow">` but GitHub Pages sites are otherwise always publicly reachable — there is no auth built in. Don't add secrets or anything sensitive to data files under the assumption the site is private.
