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

  "aint-no-sunshine": `{c: Am, about 79 bpm. Same arrangement as the PDF chart. Each verse line is one lyric line.}

[Verse 1]
{c: pickup "Ain't no sunshine when she's..." over Am}
Am  Am/E  Am/G  Am
Am  Am/E  Am/G  Am
Em  Dm
Am  Am/E  Am/G  Am

[Verse 2]
{c: "Wonder this time where she's gone...", strings come in}
Am  Am/E  Am/G  Am
Am  Am/E  Am/G  Am
Em  Dm
Am  Am/E  Am/G  Am

[I Know]
{c: percussion only under "I know, I know..." then "Hey, I oughta leave the young thing alone"}

[Verse 3]
{c: "Only darkness every day..."}
Am  Am/E  Am/G  Am
Am  Am/E  Am/G  Am
Em  Dm
Am  Am/E  Am/G  Am

[Solo]
{c: over the verse changes, 2x}
Am  Am/E  Am/G  Am
Am  Am/E  Am/G  Am
Em  Dm
Am  Am/E  Am/G  Am

[Verse 1 reprise]
{c: quiet}
Am  Am/E  Am/G  Am
Am  Am/E  Am/G  Am
Em  Dm
Am  Am/E  Am/G  Am

[Tag]
{c: "Anytime she goes away" 2 more times, end on Am}
Am  Am/E  Am/G  Am
Am  Am/E  Am/G  Am`,

  "time": `{c: F#m, 123 bpm felt in half time: each slot is one half-time bar (2 bars at 123). Chords and section cues only. Bar counts checked against the bass stem of the album version.}

[Intro]
{c: after the clocks: rototoms over bass E / F#, 4x}
E | E | F#m | F#m
{c: band in, then straight into Verse 1}
F#m | F#m | A | A | E | E | F#m | F#m

[Verse 1]
{c: 2x}
F#m | A | E | F#m

[Chorus]
D | Amaj7 | D | Amaj7
D | A/C# | Bm | E

[Solo]
{c: guitar solo over the verse changes, 4x}
F#m | A | E | F#m
{c: then the chorus changes once}
D | Amaj7 | D | Amaj7
D | A/C# | Bm | E

[Verse 2]
{c: 2x}
F#m | A | E | F#m

[Chorus]
{c: last bar changes: hold Bm 2 bars, no E, straight into the tag}
D | Amaj7 | D | Amaj7
D | A/C# | Bm | Bm

[Tag]
{c: Breathe reprise, 2x}
Em | A7 | Em | A7
Cmaj7 | Cmaj7 | Bm7 | Bm7
Fmaj7 | Fmaj7 | G D7#9
D7b9 Bm`,

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

  "wish-you-were-here": `{c: G, about 60 bpm, 4/4. Chords and section cues only. Form checked against the practice-track stems; bar counts inside each pass are best guesses.}

[Intro]
{c: 12-string riff (radio sound on the record). 1x on the practice track; the album plays it 2x, the second time with acoustic lead}
Em7 | G | Em7 | G
Em7 | A7sus4 | Em7 | A7sus4 | G | G

[Verse 1]
{c: 2x straight through, no break: "So, so you think..." then "Did they get you to trade...". Bass comes in the second time}
C | D/F# | Am/E | G
D/F# | C | Am | G

[Solo]
{c: acoustic lead over the riff changes, 1x}
Em7 | G | Em7 | G
Em7 | A7sus4 | Em7 | A7sus4 | G | G

[Verse 2]
{c: "How I wish, how I wish you were here...", 1x}
C | D/F# | Am/E | G
D/F# | C | Am | G

[Outro]
{c: lead + wordless vocal over the riff changes, 2x, then fade or end on G}
Em7 | G | Em7 | G
Em7 | A7sus4 | Em7 | A7sus4 | G | G`

};
