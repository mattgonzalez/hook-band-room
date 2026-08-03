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
  /* --- Set 1 --- */
  {
    id: "goin-down",
    title: "Goin' Down",
    artist: "Freddie King",
    key: "D",
    audio: null
  },
  {
    id: "mrs-robinson",
    title: "Mrs. Robinson",
    artist: "Lemonheads",
    key: "E & G",
    audio: null
  },
  {
    id: "crazy-little-thing",
    title: "Crazy Little Thing Called Love",
    artist: "Queen",
    key: "D",
    audio: null
  },
  {
    id: "blackbird",
    title: "Blackbird",
    artist: "Beatles",
    key: "G",
    audio: null
  },
  {
    id: "fire-and-rain",
    title: "Fire and Rain",
    artist: "James Taylor",
    key: "C",
    audio: null
  },
  {
    id: "killing-me-softly",
    title: "Killing Me Softly",
    artist: "Fugees",
    key: "Em",
    audio: null
  },
  {
    id: "moondance",
    title: "Moondance",
    artist: "Van Morrison",
    key: "Am",
    audio: null
  },
  {
    id: "i-still-havent-found",
    title: "I Still Haven't Found What I'm Looking For",
    artist: "U2",
    key: "A",
    audio: null
  },
  {
    id: "wagon-wheel",
    title: "Wagon Wheel",
    artist: "Darius Rucker",
    key: "G",
    audio: null
  },
  {
    id: "hook",
    title: "Hook",
    artist: "Blues Traveler",
    key: "G",
    audio: null
  },
  {
    id: "two-tickets-to-paradise",
    title: "Two Tickets to Paradise",
    artist: "Eddie Money",
    key: "A",
    audio: null
  },
  {
    id: "just-what-i-needed",
    title: "Just What I Needed",
    artist: "The Cars",
    key: "E",
    audio: null
  },

  /* --- Set 2 --- */
  {
    id: "i-gotta-feeling",
    title: "I Gotta Feeling",
    artist: "Black Eyed Peas",
    key: "G",
    audio: null
  },
  {
    id: "keep-your-hands-to-yourself",
    title: "Keep Your Hands to Yourself",
    artist: "Georgia Satellites",
    key: "A",
    audio: null
  },
  {
    id: "crazy",
    title: "Crazy",
    artist: "Gnarls Barkley",
    key: "Cm",
    audio: null
  },
  {
    id: "down-under",
    title: "Down Under",
    artist: "Men At Work",
    key: "Am",
    audio: null
  },
  {
    id: "be-my-girl",
    title: "Be My Girl",
    artist: "Jet",
    key: "E",
    audio: null
  },
  {
    id: "eleanor-rigby",
    title: "Eleanor Rigby",
    artist: "Beatles",
    key: "Em",
    audio: null
  },
  {
    id: "aint-no-sunshine",
    title: "Ain't No Sunshine",
    artist: "Bill Withers",
    key: "Am",
    audio: null
  },
  {
    id: "hello",
    title: "Hello",
    artist: "Adele",
    key: "G",
    audio: null
  },
  {
    id: "lights",
    title: "Lights",
    artist: "Journey",
    key: "D",
    audio: null
  },
  {
    id: "lovin-touchin-squeezin",
    title: "Lovin' Touchin' Squeezin'",
    artist: "Journey",
    key: "E",
    audio: null
  },
  {
    id: "i-will-survive",
    title: "I Will Survive",
    artist: "Cake",
    key: "Am",
    audio: null,
    notes: "Reference: https://youtu.be/f9rCUQjmkxU?si=Hgi9fckZ4AxhJayr"
  },
  {
    id: "come-together",
    title: "Come Together",
    artist: "Beatles",
    key: "Dm",
    audio: null
  },

  /* --- Set 3 --- */
  {
    id: "you-wreck-me",
    title: "You Wreck Me",
    artist: "Tom Petty",
    key: "F",
    audio: null
  },
  {
    id: "sexyback",
    title: "SexyBack",
    artist: "Justin Timberlake",
    key: "Am",
    audio: null
  },
  {
    id: "make-you-feel-my-love",
    title: "Make You Feel My Love",
    key: "G",
    audio: null
  },
  {
    id: "free-fallin",
    title: "Free Fallin'",
    artist: "Tom Petty",
    key: "F",
    audio: null
  },
  {
    id: "sultans-of-swing",
    title: "Sultans of Swing",
    artist: "Dire Straits",
    key: "Dm",
    audio: null
  },
  {
    id: "get-lucky",
    title: "Get Lucky (Martin Miller version)",
    artist: "Daft Punk",
    key: "Bm",
    audio: null,
    notes: "Reference: https://youtu.be/oPkaHxvxoso?si=GyZ9F9G-LiFmZBO-"
  },
  {
    id: "rikki-dont-lose-that-number",
    title: "Rikki Don't Lose That Number",
    artist: "Steely Dan",
    key: "Em",
    audio: null
  },
  {
    id: "tennessee-whiskey",
    title: "Tennessee Whiskey",
    artist: "Chris Stapleton",
    key: "A",
    audio: null
  },
  {
    id: "valerie",
    title: "Valerie",
    artist: "Amy Winehouse",
    key: "E♭",
    audio: null
  },
  {
    id: "dont-stop-me-now",
    title: "Don't Stop Me Now",
    artist: "Queen",
    key: "D",
    audio: null
  },
  {
    id: "colors",
    title: "Colors",
    artist: "Black Pumas",
    key: "Em",
    audio: null
  }
];
