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

  "dock-of-the-bay": `[Verse 1]
G            B7
(lyrics)
C                A7
(lyrics)
G            B7
(lyrics)
C                A7
(lyrics)

[Chorus]
G        E7
(lyrics)
G        E7
(lyrics)
G     A7
(lyrics)
G     E7
(lyrics)

[Bridge]
G  D  C        G  D  C
(lyrics)
G       D        C            F  D7
(lyrics)

{c: Whistle outro over verse changes — fade}`,

  "use-me": `[Intro]
{c: Main riff — E minor pentatonic, 4x}
Em7 (riff)

[Verse]
Em7                       A7
(lyrics)
Em7                       A7
(lyrics)

[Pre-chorus]
Bm7            Am7
(lyrics)
Bm7            Am7        B7#9
(lyrics)

{c: Stop hits after chorus 2 — watch for the cue}`,

  "stormy-monday": `{c: Slow 12/8 blues — Allman Brothers "uptown" changes}

[Verse]
G9   C9   G9   G9
C9   C9   G9  Am7 Bm7 Bbm7
Am7  Ab9  G9   C9  G9  D9(hold)

[Solo]
{c: Same changes, two choruses guitar}

{c: Last time: ritard on the Ab9, end on G13}`,

  "thrill-is-gone": `{c: Minor blues in Am — B.B. style}

[Verse]
Am   Am   Am   Am
Dm   Dm   Am   Am
Fmaj7    Fmaj7    E7   E7
Am   Am   Am   Am

[Solo]
{c: Same form. Fmaj7 is the money chord — let it breathe}

{c: Outro: vamp Am, dynamics down, big last chorus}`,

  "knockin": `[Verse]
G        D        Am7
(lyrics)
G        D        C
(lyrics)

[Chorus]
G           D           Am7
(lyrics)
G           D           C
(lyrics)

{c: Chorus x2 at the end, big harmony, soft last time}`,

  /* Full example of the inline bracket format, with original lyrics */
  "hook-line-sinker": `[Intro]
A7   D9   A7   E7

[Verse 1]
[A7]Down on lower State Street when the [D9]lights come on,
[A7]Band counts four and the [E7]night is gone.
[D9]Dance floor's calling and you [A7]know the drill —
[E7]One more chorus and we're [A7]playing still. [E7]

[Chorus]
She got me [D9]hook, line and [A7]sinker,
[D9]Caught me on the [A7]downbeat, made me a be[E7]liever.
[D9]Hook, line and [A7]sinker — [F#m]one sweet groove and I'm
[D9]gone, [E7]gone, [A7]gone.

[Verse 2]
{c: Same changes — guitar answers vocal phrases}

[Solo]
A7   D9   A7   A7
D9   D9   A7   F#m
D9   E7   A7   E7

{c: Chorus x2, band stops on "gone", vocal tag, hit on A7}`

};
