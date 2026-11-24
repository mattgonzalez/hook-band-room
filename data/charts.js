/* ============================================================
   CHORD CHARTS — one entry per song id from songs.js.

   Charts are plain text inside backticks. Two formats work
   (mix them freely in one chart):

   1) Inline brackets (chordsheet / ChordPro style):
        [Am]Lyric goes [Em]here
      The chord is placed above the exact syllable it lands on.

   2) Chord line above lyric line:
        Am        Em        Dm
        Lyric line goes underneath

   Extras:
     [Verse 1] / [Chorus] etc. on their own line = section header
     {c: any note}                               = italic comment

   Transposition works automatically on both formats.

   ⚠ Paste your own lyrics in — the placeholders below are just
   structure + changes so the repo stays copyright-clean.
   ============================================================ */
window.CHARTS = {

  "aint-no-sunshine": `[Intro]
Am   Em G   Am

[Verse 1]
Am          Em G      Am
(lyrics)
Am          Em G      Am
(lyrics)
Em                         Dm
(lyrics)
             Am    Em G   Am
(lyrics)

[Bridge]
{c: "I know, I know..." — vamp on Am, 13x, land on Em G}
Am (vamp)

[Verse 2]
Am          Em G      Am
(lyrics)
Em                         Dm
(lyrics)
             Am    Em G   Am
(lyrics)

{c: Ends cold on Am}`,

  "miss-you": `{c: Am, about 110 bpm. Main groove: 2 bars Am7, 2 bars Dm7. Bar counts are best guesses.}

[Intro]
{c: harmonica + groove, 2x}
Am7 | Am7 | Dm7 | Dm7

[Verse 1]
{c: 4x}
Am7 | Am7 | Dm7 | Dm7

[Hook]
{c: "ooh ooh" falsetto, 2x}
Am7 | Am7 | Dm7 | Dm7

[Verse 2]
{c: 4x}
Am7 | Am7 | Dm7 | Dm7

[Hook]
{c: 2x}
Am7 | Am7 | Dm7 | Dm7

[Bridge]
F | Em7 | Dm7 | Dm7
F | Em7 | Dm7 | E7

[Sax Solo]
{c: 4x}
Am7 | Am7 | Dm7 | Dm7

[Spoken Section]
{c: over the groove, band drops down, 4x}
Am7 | Am7 | Dm7 | Dm7

[Verse 3]
{c: 4x}
Am7 | Am7 | Dm7 | Dm7

[Hook]
{c: 2x}
Am7 | Am7 | Dm7 | Dm7

[Outro]
{c: "ooh ooh" + harmonica vamp, cue the end, land on Am7}
Am7 | Am7 | Dm7 | Dm7`,

  "wish-you-were-here": `{c: G, about 60 bpm, 4/4. Chords and section cues only. Bar counts are best guesses from the album version.}

[Intro]
{c: 12-string riff (radio sound on the record), then acoustic lead over the same changes, 2x}
Em7 | G | Em7 | G
Em7 | A7sus4 | Em7 | A7sus4 | G | G

[Verse 1]
C | D/F# | Am/E | G
D/F# | C | Am | G

[Interlude]
{c: riff changes, no solo}
Em7 | G | Em7 | G
Em7 | A7sus4 | Em7 | A7sus4 | G | G

[Verse 2]
C | D/F# | Am/E | G
D/F# | C | Am | G

[Solo]
{c: acoustic lead over the riff changes, 2x}
Em7 | G | Em7 | G
Em7 | A7sus4 | Em7 | A7sus4 | G | G

[Verse 3]
{c: same changes, 2x}
C | D/F# | Am/E | G
D/F# | C | Am | G

[Outro]
{c: lead + wordless vocal over the riff changes, repeat and fade or end on G}
Em7 | G | Em7 | G
Em7 | A7sus4 | Em7 | A7sus4 | G | G`

};
