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
    audio: null,
    chartPdf: "charts-pdf/Mrs-Robinson.pdf"
  },
  {
    id: "crazy-little-thing",
    title: "Crazy Little Thing Called Love",
    artist: "Queen",
    key: "D",
    audio: null,
    chartPdf: "charts-pdf/Crazy Little Thing Called Love (Queen).pdf"
  },
  {
    id: "blackbird",
    title: "Blackbird",
    artist: "Beatles",
    key: "G",
    audio: null,
    chartPdf: "charts-pdf/blackbird-beatles-chart.pdf"
  },
  {
    id: "fire-and-rain",
    title: "Fire and Rain",
    artist: "James Taylor",
    key: "C",
    audio: null,
    chartPdf: "charts-pdf/Fire and Rain.pdf"
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
    audio: null,
    chartPdf: "charts-pdf/wagon-wheel-old-crow-medicine-show-chart.pdf"
  },
  {
    id: "hook",
    title: "Hook",
    artist: "Blues Traveler",
    key: "G",
    audio: null,
    chartPdf: "charts-pdf/Hook - Blues Traveler.pdf"
  },
  {
    id: "two-tickets-to-paradise",
    title: "Two Tickets to Paradise",
    artist: "Eddie Money",
    key: "A",
    audio: null,
    chartPdf: "charts-pdf/two-tickets-to-paradise-eddie-money-chart.pdf"
  },
  {
    id: "just-what-i-needed",
    title: "Just What I Needed",
    artist: "The Cars",
    key: "E",
    audio: null,
    chartPdf: "charts-pdf/just what i needed official.pdf"
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
    audio: null,
    chartPdf: "charts-pdf/Crazy - Gnarls Barkley.pdf"
  },
  {
    id: "down-under",
    title: "Down Under",
    artist: "Men At Work",
    key: "Am",
    audio: null,
    chartPdf: "charts-pdf/Down Under - Men at Work.pdf"
  },
  {
    id: "be-my-girl",
    title: "Be My Girl",
    artist: "Jet",
    key: "E",
    audio: null,
    chartPdf: "charts-pdf/be-my-girl.pdf"
  },
  {
    id: "eleanor-rigby",
    title: "Eleanor Rigby",
    artist: "Beatles",
    key: "Em",
    audio: null,
    chartPdf: "charts-pdf/eleanor-rigby-beatles-chart.pdf"
  },
  {
    id: "aint-no-sunshine",
    title: "Ain't No Sunshine",
    artist: "Bill Withers",
    key: "Am",
    audio: null,
    chartPdf: "charts-pdf/Ain't No Sunshine - Bill Withers.pdf"
  },
  {
    id: "hello",
    title: "Hello",
    artist: "Adele",
    key: "Em",
    audio: null,
    chartPdf: "charts-pdf/hello-adele-chart.pdf"
  },
  {
    id: "lights",
    title: "Lights",
    artist: "Journey",
    key: "D",
    audio: null,
    chartPdf: "charts-pdf/lights-journey-chart.pdf"
  },
  {
    id: "lovin-touchin-squeezin",
    title: "Lovin' Touchin' Squeezin'",
    artist: "Journey",
    key: "E",
    audio: null,
    chartPdf: "charts-pdf/lovin-touchin-squeezin-journey-chart.pdf"
  },
  {
    id: "i-will-survive",
    title: "I Will Survive",
    artist: "Cake",
    key: "Am",
    audio: null,
    chartPdf: "charts-pdf/I Will Survive.pdf",
    notes: "Reference: https://youtu.be/f9rCUQjmkxU?si=Hgi9fckZ4AxhJayr"
  },
  {
    id: "come-together",
    title: "Come Together",
    artist: "Beatles",
    key: "Dm",
    audio: null,
    chartPdf: "charts-pdf/come-together-beatles-chart.pdf"
  },

  /* --- Set 3 --- */
  {
    id: "you-wreck-me",
    title: "You Wreck Me",
    artist: "Tom Petty",
    key: "E",
    audio: null,
    chartPdf: "charts-pdf/You Wreck Me - Tom Petty.pdf",
    notes: "E Mixolydian (D–A–E vamp)."
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
    audio: null,
    chartPdf: "charts-pdf/Make You Feel My Love.pdf"
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
    audio: null,
    chartPdf: "charts-pdf/sultans of swing official.pdf"
  },
  {
    id: "get-lucky",
    title: "Get Lucky (Martin Miller version)",
    artist: "Daft Punk",
    key: "Bm",
    audio: null,
    chartPdf: "charts-pdf/Get Lucky - Daft Punk.pdf",
    notes: "Reference: https://youtu.be/oPkaHxvxoso?si=GyZ9F9G-LiFmZBO-. Imported chart is the standard studio-recording chart, not the Martin Miller arrangement — treat as a rough reference only."
  },
  {
    id: "rikki-dont-lose-that-number",
    title: "Rikki Don't Lose That Number",
    artist: "Steely Dan",
    key: "Em",
    audio: null,
    chartPdf: "charts-pdf/rikki-steely-dan-chart.pdf"
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
    id: "colors",
    title: "Colors",
    artist: "Black Pumas",
    key: "Em",
    audio: null,
    chartPdf: "charts-pdf/colors-black-pumas-chart.pdf"
  },

  /* --- Imported charts, not yet assigned to a set ---
     Keys below are inferred from the chords printed on each imported
     PDF, not confirmed by the band — verify before gigging any of
     these. */
  {
    id: "its-the-end-of-the-world",
    title: "It's the End of the World",
    artist: "R.E.M.",
    key: "G",
    audio: null,
    chartPdf: "charts-pdf/It's the End of the World - R.E.M..pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "la-isla-bonita",
    title: "La Isla Bonita",
    artist: "Madonna",
    key: "C♯m",
    audio: null,
    chartPdf: "charts-pdf/La Isla Bonita - Madonna.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "listen-to-the-music",
    title: "Listen to the Music",
    artist: "Doobie Brothers",
    key: "D",
    audio: null,
    chartPdf: "charts-pdf/Listen to the Music.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "modern-love",
    title: "Modern Love",
    artist: "David Bowie",
    key: "D",
    audio: null,
    chartPdf: "charts-pdf/Modern Love - David Bowie.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "i-wanna-dance-with-somebody",
    title: "I Wanna Dance With Somebody",
    artist: "Whitney Houston",
    key: "G♭",
    audio: null,
    chartPdf: "charts-pdf/I Wanna Dance With Somebody - Whitney Houston.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "i-cant-go-for-that",
    title: "I Can't Go For That",
    artist: "Daryl Hall & Cee Lo Green",
    key: "Fm",
    audio: null,
    chartPdf: "charts-pdf/I Can't Go For That.pdf",
    notes: "Artist billing as printed on the chart (mashup arrangement) — key inferred from chart, unconfirmed."
  },
  {
    id: "dancing-queen",
    title: "Dancing Queen",
    artist: "ABBA",
    key: "A",
    audio: null,
    chartPdf: "charts-pdf/Dancing Queen - ABBA.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "aint-nobody",
    title: "Ain't Nobody",
    artist: "Chaka Khan",
    key: "E♭m",
    audio: null,
    chartPdf: "charts-pdf/Ain't Nobody - Chaka Khan.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "i-heard-it-through-the-grapevine",
    title: "I Heard It Through the Grapevine",
    artist: "Gladys Knight & the Pips",
    key: "C",
    audio: null,
    chartPdf: "charts-pdf/I Heard It Through the Grapevine - Gladys Knight and the Pips.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "superstition",
    title: "Superstition",
    artist: "Stevie Wonder",
    key: "Em",
    audio: null,
    chartPdf: "charts-pdf/Superstition - Stevie Wonder.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "blue-skies",
    title: "Blue Skies",
    artist: "Eva Cassidy",
    key: "B♭m",
    audio: null,
    chartPdf: "charts-pdf/Blue Skies (chords) - Eva Cassidy.pdf"
  },
  {
    id: "mercy",
    title: "Mercy",
    artist: "Duffy",
    key: "G",
    audio: null,
    chartPdf: "charts-pdf/Mercy - Duffy.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "take-the-money-and-run",
    title: "Take The Money and Run",
    artist: "Steve Miller Band",
    key: "G",
    audio: null,
    chartPdf: "charts-pdf/Take The Money and Run - Steve Miller Band.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "the-river-of-dreams",
    title: "The River of Dreams",
    artist: "Billy Joel",
    key: "E",
    audio: null,
    chartPdf: "charts-pdf/The River of Dreams - Billy Joel (E).pdf"
  },
  {
    id: "ocean-eyes",
    title: "Ocean Eyes",
    artist: "Billie Eilish",
    key: "C",
    audio: null,
    chartPdf: "charts-pdf/ocean eyes.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "let-her-go",
    title: "Let Her Go",
    artist: "Passenger",
    key: "C",
    audio: null,
    chartPdf: "charts-pdf/Let Her Go - Passenger.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "ill-be-there",
    title: "I'll Be There",
    artist: "Walk Off the Earth",
    key: "F♯m",
    audio: null,
    chartPdf: "charts-pdf/I'll Be There - Walk Off the Earth.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "drowning-in-the-sea-of-love",
    title: "Drowning in the Sea of Love",
    artist: "Eva Cassidy",
    key: "Cm",
    audio: null,
    chartPdf: "charts-pdf/Drowning in the Sea of Love - Eva Cassidy.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "love-sneakin-up-on-you",
    title: "Love Sneakin' Up On You",
    artist: "Bonnie Raitt",
    key: "D",
    audio: null,
    chartPdf: "charts-pdf/Love Sneakin' Up On You - Bonnie Raitt.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "sweet-dreams-seven-nation-army",
    title: "Sweet Dreams / Seven Nation Army",
    artist: "Eurythmics / The White Stripes (mashup)",
    key: "Cm",
    audio: null,
    chartPdf: "charts-pdf/Sweet Dreams - Seven Nation Army.pdf",
    notes: "Title/artist inferred from filename — verify this is the intended mashup arrangement. Key inferred from chart, unconfirmed."
  },
  {
    id: "back-on-the-chain-gang",
    title: "Back On the Chain Gang",
    artist: "Pretenders",
    key: "D",
    audio: null,
    chartPdf: "charts-pdf/Back On the Chain Gang - Pretenders.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "all-that-you-dream",
    title: "All That You Dream",
    artist: "Little Feat",
    key: "G",
    audio: null,
    chartPdf: "charts-pdf/All That You Dream.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "insider",
    title: "Insider",
    artist: "Tom Petty & the Heartbreakers (feat. Stevie Nicks)",
    key: "A",
    audio: null,
    chartPdf: "charts-pdf/Insider - Tom Petty & the Heartbreakers & Stevie Nicks.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "exs-and-ohs",
    title: "Ex's & Oh's",
    artist: "Elle King",
    key: "Em",
    audio: null,
    chartPdf: "charts-pdf/Ex's & Oh's - Elle King.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "higher-love",
    title: "Higher Love",
    artist: "Steve Winwood",
    key: "C",
    audio: null,
    chartPdf: "charts-pdf/Higher Love - Steve Winwood.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "just-the-two-of-us",
    title: "Just the Two of Us",
    artist: "Bill Withers",
    key: "E♭",
    audio: null,
    chartPdf: "charts-pdf/Just the Two of Us - Bill Withers.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "everybody-wants-to-rule-the-world",
    title: "Everybody Wants to Rule the World",
    artist: "Tears for Fears",
    key: "D",
    audio: null,
    chartPdf: "charts-pdf/Everybody Wants to Rule the World - D.pdf",
    notes: "Source filename was truncated (\"- D.pdf\") — artist inferred, please verify. Key inferred from chart, unconfirmed."
  },
  {
    id: "love-letter",
    title: "Love Letter",
    artist: "Bonnie Raitt",
    key: "D",
    audio: null,
    chartPdf: "charts-pdf/Love Letter - Bonnie Raitt.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "tainted-love",
    title: "Tainted Love",
    artist: "Soft Cell",
    key: "Gm",
    audio: null,
    chartPdf: "charts-pdf/Tainted Love - Soft Cell.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "angel-from-montgomery",
    title: "Angel from Montgomery",
    artist: "John Prine",
    key: "E",
    audio: null,
    chartPdf: "charts-pdf/Angel from Montgomery - John Prine.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "something-to-talk-about",
    title: "Something to Talk About",
    artist: "Bonnie Raitt",
    key: "A♭",
    audio: null,
    chartPdf: "charts-pdf/Something to Talk About - Bonnie Raitt.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "walk-on-the-ocean",
    title: "Walk On the Ocean",
    artist: "Toad the Wet Sprocket",
    key: "B",
    audio: null,
    chartPdf: "charts-pdf/Walk On the Ocean - Toad the Wet Sprocket.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "i-believe-im-in-love-with-you",
    title: "I Believe I'm In Love With You",
    artist: "Bonnie Raitt",
    key: "C",
    audio: null,
    chartPdf: "charts-pdf/I Believe I'm In Love With You - Bonnie Raitt.pdf",
    notes: "Key inferred from chart, unconfirmed."
  },
  {
    id: "you-can-leave-your-hat-on",
    title: "You Can Leave Your Hat On",
    artist: "Joe Cocker",
    key: "C",
    audio: null,
    chartPdf: "charts-pdf/You Can Leave Your Hat On.pdf",
    notes: "Artist not printed on chart, filled in from common knowledge — please verify. Key inferred from chart, unconfirmed."
  },
  {
    id: "rock-this-town",
    title: "Rock This Town",
    artist: "Stray Cats",
    key: "D",
    audio: null,
    chartPdf: "charts-pdf/Rock This Town - Stray Cats.pdf",
    notes: "Key inferred from chart, unconfirmed."
  }
];
