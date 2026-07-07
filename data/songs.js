/* ============================================================
   SONGBOOK — add or edit songs here.

   Each song:
     id:     short unique slug (used in URLs, charts.js, and gigs.js)
     title:  display title
     artist: original artist (optional)
     key:    the key THE BAND plays it in, e.g. "Am", "G", "Bb"
     tempo:  bpm (optional)
     capo:   fret number (optional)
     audio:  path to a practice recording in /audio, or a full URL
             to Dropbox/Drive/etc. Leave null if none yet.
     chordsheet: public URL of the song's sheet on chordsheet.com
             (unlock it there via Sharing → Public URL). Adds an
             "Open on Chordsheet ↗" button to the chart toolbar.
     chartPdf: path to a PDF exported from chordsheet.com and
             dropped into /charts-pdf. Renders embedded in the
             chart view, above any text chart.
     notes:  anything useful ("two-chorus solo", "ends cold", ...)
   ============================================================ */
window.SONGS = [
  {
    id: "aint-no-sunshine",
    title: "Ain't No Sunshine",
    artist: "Bill Withers",
    key: "Am",
    tempo: 78,
    audio: null,
    notes: "Ends cold on the Am"
  },
  {
    id: "dock-of-the-bay",
    title: "(Sittin' On) The Dock of the Bay",
    artist: "Otis Redding",
    key: "G",
    tempo: 104,
    audio: null,
    notes: "Whistle outro, fade"
  },
  {
    id: "use-me",
    title: "Use Me",
    artist: "Bill Withers",
    key: "Em",
    tempo: 92,
    audio: null,
    notes: "Riff-driven, watch the stop hits"
  },
  {
    id: "stormy-monday",
    title: "Stormy Monday",
    artist: "T-Bone Walker (Allman Bros arr.)",
    key: "G",
    tempo: 62,
    audio: null,
    // chordsheet: "https://www.chordsheet.com/public/XXXXXX",
    // chartPdf: "charts-pdf/stormy-monday.pdf",
    notes: "Slow blues, uptown changes"
  },
  {
    id: "thrill-is-gone",
    title: "The Thrill Is Gone",
    artist: "B.B. King",
    key: "Am",
    tempo: 96,
    audio: null,
    notes: "Minor blues with the b6 turnaround"
  },
  {
    id: "knockin",
    title: "Knockin' on Heaven's Door",
    artist: "Bob Dylan",
    key: "G",
    tempo: 70,
    audio: null,
    notes: "Big harmony on the chorus"
  },
  {
    id: "hook-line-sinker",
    title: "Hook, Line & Sinker (original)",
    artist: "The Hook",
    key: "A",
    tempo: 112,
    audio: "audio/demo-groove.mp3",
    notes: "Demo groove attached — full chart below shows the inline [chord] format"
  },
  {
    id: "crazy-little-thing",
    title: "Crazy Little Thing Called Love",
    artist: "Queen",
    key: "D"
  }
];
