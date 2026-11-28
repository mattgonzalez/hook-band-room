/* ============================================================
   SONGBOOK — add or edit songs here.

   Each song:
     id:     short unique slug (used in URLs, charts.js, and gigs.js)
     title:  display title
     artist: original artist (optional)
     key:    the key THE BAND plays it in, e.g. "Am", "G", "Bb"
     tempo:  bpm (optional)
     capo:   fret number (optional)
     original: the original/reference recording — path in /audio,
             or a full URL to Dropbox/Drive/etc. (optional)
     drumBass: play-along mix with just drums + bass — same format.
     noDrums: play-along mix with the drums removed — same format.
             Leave null if none yet. The player bar's Original /
             Drum + bass / No drums dropdown greys out whichever
             ones are missing. Songs that have `stems` use the
             stem mixer instead, so these three are ignored there.
     stems:  up to six separated stems, mixed live in the browser
             with a volume fader, mute and solo per stem:
               stems: {
                 vocals: "audio/stems/<id>/vocals.m4a",
                 drums:  "audio/stems/<id>/drums.m4a",
                 bass:   "audio/stems/<id>/bass.m4a",
                 guitar: "audio/stems/<id>/guitar.m4a",
                 piano:  "audio/stems/<id>/piano.m4a",
                 other:  "audio/stems/<id>/other.m4a"
               }
             Leave out any stem you don't have; its strip shows as
             "none yet". All stems must start at the same point and
             share a sample rate (bounce them from one session).
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
 id: "fly-like-an-eagle",
 title: "Fly Like An Eagle",
 artist: "Steve Miller Band",
 key: "Am",
 tempo: 100,
 original: "audio/source/Fly Like an Eagle (Playing For Change).m4a",
 chartPdf: "charts-pdf/fly-like-an-eagle-steve-miller-band-chart.pdf",
 stems: {
   vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AAWKicXRRSd6Raxss_jR7KQ/Fly%20Like%20an%20Eagle%20%28Playing%20For%20Change%29/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
   drums:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AMwYn4H-Lc9oSb2jl8NfWs8/Fly%20Like%20an%20Eagle%20%28Playing%20For%20Change%29/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
   bass:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/APndH3OuThV8iuJXfRQels8/Fly%20Like%20an%20Eagle%20%28Playing%20For%20Change%29/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
   guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/APlEAtsThaPfFv8XQBDnFPo/Fly%20Like%20an%20Eagle%20%28Playing%20For%20Change%29/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
   piano:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ACEwEH8n4LW924nn7rSreOw/Fly%20Like%20an%20Eagle%20%28Playing%20For%20Change%29/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
   other:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ALFY-Mrl_BOYZb3_pGBETTc/Fly%20Like%20an%20Eagle%20%28Playing%20For%20Change%29/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
 }
  },
  /* --- Set 1 --- */
  {
    id: "goin-down",
    title: "Goin' Down",
    artist: "Jeff Beck",
    key: "D",
    tempo: 90,
    original: "audio/source/Goin' Down.m4a",
    stems: {
      vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AKH_4C5coEIhYuK6jmDcYks/Goin%27%20Down/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      drums:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ALzc8cLTsdGp0j-hlTgnT0A/Goin%27%20Down/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      bass:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AOnAPGfwwy-0rCbkfBbwEek/Goin%27%20Down/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ACWcHr3MPQiUcrXJGfIpLEw/Goin%27%20Down/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      piano:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AFQvyN-AKoALOVMMtoKLBGg/Goin%27%20Down/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      other:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AMTatFo4X-HOq2i7bg19zAc/Goin%27%20Down/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
    },
    chartPdf: "charts-pdf/goin-down-freddie-king-chart.pdf"
  },
  {
    id: "mrs-robinson",
    title: "Mrs. Robinson",
    artist: "Lemonheads",
    key: "E & G",
    tempo: 108,
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Mrs-Robinson.pdf"
  },
  {
    id: "crazy-little-thing",
    title: "Crazy Little Thing Called Love",
    artist: "Queen",
    key: "D",
    tempo: 154,
    original: "audio/source/Crazy Little Thing Called Love.m4a",
    chartPdf: "charts-pdf/Crazy Little Thing Called Love (Queen).pdf",
    stems: {
      vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AL_N20OFtqMrtU9yBN0Kg9Y/Crazy%20Little%20Thing%20Called%20Love/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      drums:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ANHW5AZ4fqBrBY-ZWg8XeB4/Crazy%20Little%20Thing%20Called%20Love/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      bass:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ACd6eg4ebJdFq0O_eXZ4lOg/Crazy%20Little%20Thing%20Called%20Love/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AN9LF08olmS378AQgcRLkU4/Crazy%20Little%20Thing%20Called%20Love/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      piano:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ABpP5StA6yNzi7BatXqNCvo/Crazy%20Little%20Thing%20Called%20Love/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      other:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AFfodufC1jMJrv5Rf_l4VN8/Crazy%20Little%20Thing%20Called%20Love/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
    }
  },
  {
    id: "blackbird",
    title: "Blackbird",
    artist: "Beatles",
    key: "G",
    tempo: 94,
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/blackbird-beatles-chart.pdf"
  },
  {
    id: "fire-and-rain",
    title: "Fire and Rain",
    artist: "James Taylor",
    key: "C",
    tempo: 75,
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Fire and Rain.pdf"
  },
  {
    id: "killing-me-softly",
    title: "Killing Me Softly",
    artist: "Fugees",
    key: "Em",
    tempo: 92,
    drumBass: null,
    noDrums: null
  },
  {
    id: "moondance",
    title: "Moondance",
    artist: "Van Morrison",
    key: "Am",
    tempo: 131,
    drumBass: null,
    noDrums: null
  },
  {
    id: "i-still-havent-found",
    title: "I Still Haven't Found What I'm Looking For",
    artist: "U2",
    key: "A",
    tempo: 101,
    drumBass: null,
    noDrums: null
  },
  {
    id: "wagon-wheel",
    title: "Wagon Wheel",
    artist: "Darius Rucker",
    key: "G",
    tempo: 80,
    original: "audio/source/Wagon Wheel.m4a",
    chartPdf: "charts-pdf/wagon-wheel-old-crow-medicine-show-chart.pdf",
    stems: {
      vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AGoxRIYemEFmxkQ3tXsiDVw/Wagon%20Wheel/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      drums:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AAUg13kpYgnhuPrlW94-IsQ/Wagon%20Wheel/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      bass:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AJEpZg_n-6Hx5ondNq-aWY8/Wagon%20Wheel/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AIPOo511LVR3GuoJ28CbnnY/Wagon%20Wheel/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      piano:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AJsGpH3_1lwxQm2esNFnjmA/Wagon%20Wheel/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      other:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ANtYsMX0nxqIdAnWsYqvJRI/Wagon%20Wheel/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
    }
  },
  {
    id: "hook",
    title: "Hook",
    artist: "Blues Traveler",
    key: "G",
    tempo: 83,
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Hook - Blues Traveler.pdf"
  },
  {
    id: "two-tickets-to-paradise",
    title: "Two Tickets to Paradise",
    artist: "Eddie Money",
    key: "A",
    tempo: 130,
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/two-tickets-to-paradise-eddie-money-chart.pdf"
  },
  {
    id: "just-what-i-needed",
    title: "Just What I Needed",
    artist: "The Cars",
    key: "E",
    tempo: 128,
    original: "audio/source/Just What I Needed.m4a",
    chartPdf: "charts-pdf/just what i needed official.pdf",
    stems: {
      vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AB1Fj1mQeE_tjXZHDIodXw4/Just%20What%20I%20Needed/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      drums:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/APFg6lcq1t9gWbWQfh674Zw/Just%20What%20I%20Needed/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      bass:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AGDIE6C29a8p-q_bEcFCYxA/Just%20What%20I%20Needed/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AKt8n3H-BLNYO4-Mby7Z3k0/Just%20What%20I%20Needed/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      piano:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AP0CKhuEQz48qQL9PtunsuI/Just%20What%20I%20Needed/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      other:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/APiDmspcUTcL7fwat87oDgw/Just%20What%20I%20Needed/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
    }
  },

  /* --- Set 2 --- */
  {
    id: "i-gotta-feeling",
    title: "I Gotta Feeling",
    artist: "Black Eyed Peas",
    key: "G",
    tempo: 128,
    original: "audio/source/The Black Eyed Peas - I Gotta Feeling Official Music Video.wav",
    stems: {
      vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AFX5hXyXXF157jTpeqXe6is/I%20Gotta%20Feeling/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      drums:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AJXHOWCfUTBIq5CNk77HtE0/I%20Gotta%20Feeling/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      bass:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AA8-xcBqXKJLvfTFho7Ilnc/I%20Gotta%20Feeling/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/APu640zEqWgrGP2OxBqUkFM/I%20Gotta%20Feeling/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      piano:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AO0eBMYlifrloKOBIP81WHc/I%20Gotta%20Feeling/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      other:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AEfd30j6XxTgkqs5y_5vL4M/I%20Gotta%20Feeling/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
    }
  },
  {
    id: "keep-your-hands-to-yourself",
    title: "Keep Your Hands to Yourself",
    artist: "Georgia Satellites",
    key: "A",
    tempo: 115,
    chartPdf: "charts-pdf/keep-your-hands-to-yourself-georgia-satellites-chart.pdf",
    stems: {
      vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AD1ucZhrcUiC-3W39rtD47E/Keep%20Your%20Hands%20to%20Yourself/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      drums:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AOfFylrwzK7cg276JEp0tSs/Keep%20Your%20Hands%20to%20Yourself/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      bass:    "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AEXUhO6u0elbmsJqZHTV_pw/Keep%20Your%20Hands%20to%20Yourself/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AF1RhcEYIbNxfAPLFX7IktY/Keep%20Your%20Hands%20to%20Yourself/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      piano:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AD2b1vbwdWby7QVeYRFd16I/Keep%20Your%20Hands%20to%20Yourself/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      other:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ANEcs0UCJ-Pk8Pyjq2435JI/Keep%20Your%20Hands%20to%20Yourself/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
    }
  },
  {
    id: "crazy",
    title: "Crazy",
    artist: "Gnarls Barkley",
    key: "Cm",
    tempo: 112,
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Crazy - Gnarls Barkley.pdf"
  },
  {
    id: "down-under",
    title: "Down Under",
    artist: "Men At Work",
    key: "Am",
    tempo: 96,
    original: "audio/source/Down Under (Am).m4a",
    chartPdf: "charts-pdf/Down Under - Men at Work.pdf",
    stems: {
      vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AALj0mfaMfkXT1CNrIddl0Y/Down%20Under%20%28Am%29/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      drums:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AHqCAHbdATzAfklbR5zBXbY/Down%20Under%20%28Am%29/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      bass:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AGrclWqJ1sa8Cyxh3nxNMJE/Down%20Under%20%28Am%29/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AJVOwhloy18n0RAR-lMlYtQ/Down%20Under%20%28Am%29/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      piano:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AJhiCCeepvp7uPbiDrDIjH4/Down%20Under%20%28Am%29/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      other:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ALOFjuV0UO8RQXSpU_RUW88/Down%20Under%20%28Am%29/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
    }
  },
  {
    id: "be-my-girl",
    title: "Are You Gonna Be My Girl",
    artist: "Jet",
    key: "E",
    tempo: 210,
    original: "audio/source/Be My Girl (Key of E).m4a",
    chartPdf: "charts-pdf/are-you-gonna-be-my-girl-jet-chart.pdf",
    stems: {
      vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ALAWo1A4FtdvYrSh7s4PkL0/Be%20My%20Girl%20%28Key%20of%20E%29/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      drums:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AMy35lK_Q3vZZS2qx-ig8Xw/Be%20My%20Girl%20%28Key%20of%20E%29/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      bass:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ANbEt6ciKRlpcvLE8AWV71s/Be%20My%20Girl%20%28Key%20of%20E%29/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AFNoDMEJvrhq8wl7hwC4GPk/Be%20My%20Girl%20%28Key%20of%20E%29/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      piano:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ABeHKIR3uf4BJQ2W2laG5cE/Be%20My%20Girl%20%28Key%20of%20E%29/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      other:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ALTBQCoM2mOJZkJWoXSeycQ/Be%20My%20Girl%20%28Key%20of%20E%29/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
    }
  },
  {
    id: "eleanor-rigby",
    title: "Eleanor Rigby",
    artist: "Beatles",
    key: "Em",
    tempo: 137,
    original: "audio/source/Eleanor Rigby.m4a",
    chartPdf: "charts-pdf/eleanor-rigby-beatles-chart.pdf",
    stems: {
      vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ADV7tlxLNk3p-EzL5cDtFFc/Eleanor%20Rigby/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      drums:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AFPRRLA2_8UowdF8cQvcHkA/Eleanor%20Rigby/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      bass:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AGcCydbfgdihyPkvsCKj4TM/Eleanor%20Rigby/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AI5HbEFrj6Y6x5UogfM7WyI/Eleanor%20Rigby/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      piano:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AOYg3yNEBedUphkV6G0x3N4/Eleanor%20Rigby/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      other:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AMbOr7qCqI4tD0o49JO3nwU/Eleanor%20Rigby/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
    }
  },
  {
    id: "aint-no-sunshine",
    title: "Ain't No Sunshine",
    artist: "Bill Withers",
    key: "Am",
    tempo: 79,
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Ain't No Sunshine - Bill Withers.pdf"
  },
  {
    id: "hello",
    title: "Hello",
    artist: "Adele",
    key: "Em",
    tempo: 79,
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/hello-adele-chart.pdf"
  },
  {
    id: "lights",
    title: "Lights",
    artist: "Journey",
    key: "D",
    tempo: 69,
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/lights-journey-chart.pdf"
  },
  {
    id: "lovin-touchin-squeezin",
    title: "Lovin' Touchin' Squeezin'",
    artist: "Journey",
    key: "E",
    tempo: 71,
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/lovin-touchin-squeezin-journey-chart.pdf"
  },
  {
    id: "i-will-survive",
    title: "I Will Survive",
    artist: "Cake",
    key: "Am",
    tempo: 92,
    original: "audio/source/I Will Survive.m4a",
    chartPdf: "charts-pdf/I Will Survive.pdf",
    notes: "Reference: https://youtu.be/f9rCUQjmkxU?si=Hgi9fckZ4AxhJayr",
    stems: {
      vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ACoC8d7yojdnVpZnAQDadhU/I%20Will%20Survive/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      drums:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AH_G2dSS-42Fk0lhOnlWqRM/I%20Will%20Survive/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      bass:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AFLDnTVmdE7uj-MLD40PNTM/I%20Will%20Survive/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AOksPsSyIIx46vM5OtU10bY/I%20Will%20Survive/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      piano:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AJ-c1OX9mX5GCWDBvJMu79M/I%20Will%20Survive/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      other:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AKipG_9Sx7wtfj3vYEj5UMY/I%20Will%20Survive/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
    }
  },
  {
    id: "come-together",
    title: "Come Together",
    artist: "Beatles",
    key: "Dm",
    tempo: 82,
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/come-together-beatles-chart.pdf"
  },

  /* --- Set 3 --- */
  {
    id: "you-wreck-me",
    title: "You Wreck Me",
    artist: "Tom Petty",
    key: "E",
    tempo: 164,
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/You Wreck Me - Tom Petty.pdf",
    notes: "E Mixolydian (D–A–E vamp)."
  },
  {
    id: "sexyback",
    title: "SexyBack",
    artist: "Justin Timberlake",
    key: "Am",
    tempo: 117,
    drumBass: null,
    noDrums: null
  },
  {
    id: "make-you-feel-my-love",
    title: "Make You Feel My Love",
    key: "G",
    tempo: 72,
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Make You Feel My Love.pdf"
  },
  {
    id: "free-fallin",
    title: "Free Fallin'",
    artist: "Tom Petty",
    key: "F",
    tempo: 84,
    drumBass: null,
    noDrums: null
  },
  {
    id: "sultans-of-swing",
    title: "Sultans of Swing",
    artist: "Dire Straits",
    key: "Dm",
    tempo: 148,
    original: "audio/source/Sultans of Swing.m4a",
    chartPdf: "charts-pdf/sultans of swing official.pdf",
    stems: {
      vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ACVnbBBIe5XYhPjDTu3hyYA/Sultans%20of%20Swing/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      drums:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ABZC7GI4X5XFx9rLNVGbAVw/Sultans%20of%20Swing/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      bass:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ALNPlADeAI2tVruqXtXPuf0/Sultans%20of%20Swing/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ADNVrGbETo98UmbOjOhYRrc/Sultans%20of%20Swing/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      piano:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/APqoKzcbo84dd-8J1g_RVyc/Sultans%20of%20Swing/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      other:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AL5wEAFNZjn6E7Fewy2RvnA/Sultans%20of%20Swing/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
    }
  },
  {
    id: "get-lucky",
    title: "Get Lucky (Martin Miller version)",
    artist: "Daft Punk",
    key: "Bm",
    tempo: 116,
    original: "audio/source/Get Lucky (Martin Miller Band).m4a",
    chartPdf: "charts-pdf/Get Lucky - Daft Punk.pdf",
    notes: "Reference: https://youtu.be/oPkaHxvxoso?si=GyZ9F9G-LiFmZBO-. Imported chart is the standard studio-recording chart, not the Martin Miller arrangement — treat as a rough reference only.",
    stems: {
      vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ABmuzfx_B7lUClKpMegMlHY/Get%20Lucky%20%28Martin%20Miller%20Band%29/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      drums:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AFkLZ5QEZB54EQ0DqKeQz9o/Get%20Lucky%20%28Martin%20Miller%20Band%29/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      bass:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AD6Fj_dCDSHOy6C2EGuxN4w/Get%20Lucky%20%28Martin%20Miller%20Band%29/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AGHWPx-7y3lHUFbshGknBXg/Get%20Lucky%20%28Martin%20Miller%20Band%29/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      piano:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ALFwam_ihnAoRMLXg4qBzGk/Get%20Lucky%20%28Martin%20Miller%20Band%29/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      other:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AFKvPbaauXMIsKcUPVAFHTs/Get%20Lucky%20%28Martin%20Miller%20Band%29/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
    }
  },
  {
    id: "rikki-dont-lose-that-number",
    title: "Rikki Don't Lose That Number",
    artist: "Steely Dan",
    key: "Em",
    tempo: 117,
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/rikki-steely-dan-chart.pdf"
  },
  {
    id: "tennessee-whiskey",
    title: "Tennessee Whiskey",
    artist: "Chris Stapleton",
    key: "A",
    tempo: 50,
    drumBass: null,
    noDrums: null
  },
  {
    id: "valerie",
    title: "Valerie",
    artist: "Amy Winehouse",
    key: "E♭",
    tempo: 106,
    drumBass: null,
    noDrums: null
  },
  {
    id: "colors",
    title: "Colors",
    artist: "Black Pumas",
    key: "Em",
    tempo: 92,
    original: "audio/source/Colors.m4a",
    chartPdf: "charts-pdf/colors-black-pumas-chart.pdf",
    stems: {
      vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ALPJi6DWgUKfPnabC5TmVJs/Colors/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      drums:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ADeN48WBGzlonBVj8Nl7WcI/Colors/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      bass:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AKUhpTKvan-jFFlhFTr5mic/Colors/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AC0H40lqZebXgrjW-9ciVa4/Colors/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      piano:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ANau8Bbkcw3jmVhbfzaZtjI/Colors/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      other:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AB76h9C2_qxC0XS4xsn0pEo/Colors/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
    }
  },

  /* --- New songs, Nov 2026 (stems separated with Demucs) --- */
  {
    id: "taking-care-of-business",
    title: "Taking Care of Business",
    artist: "Bachman-Turner Overdrive",
    key: "C",
    tempo: 130,
    original: "audio/source/Bachman Turner Overdrive-Taking care of business.mkv",
    chartPdf: "charts-pdf/taking-care-of-business-bachman-turner-overdrive-chart.pdf",
    stems: {
      vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AJYlZnT-TGmHpSikYKqZZBw/Bachman%20Turner%20Overdrive-Taking%20care%20of%20business/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      drums:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AG4L7Vg2vIJ8cbDJhdPrcZg/Bachman%20Turner%20Overdrive-Taking%20care%20of%20business/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      bass:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AEVqMZvVBM5JSzv7Sw4p6bc/Bachman%20Turner%20Overdrive-Taking%20care%20of%20business/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AMXpUazFHDuyWXES4oeLc6c/Bachman%20Turner%20Overdrive-Taking%20care%20of%20business/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      piano:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AG5PmFISnjvgkQn2YRRxNgQ/Bachman%20Turner%20Overdrive-Taking%20care%20of%20business/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      other:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AAfbqBjOUJReAXd4UoZrm_s/Bachman%20Turner%20Overdrive-Taking%20care%20of%20business/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
    }
  },
  {
    id: "drops-of-jupiter",
    title: "Drops of Jupiter",
    artist: "Train",
    key: "C",
    tempo: 80,
    original: "audio/source/Drops of Jupiter.m4a",
    chartPdf: "charts-pdf/drops-of-jupiter-train-chart.pdf",
    stems: {
      vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AKLtLGKlXOSljAT19y5KxJ4/Drops%20of%20Jupiter/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      drums:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ADkYLhwTD9T-nTUbebc-V5w/Drops%20of%20Jupiter/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      bass:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AFXT5v7W_ni_WZdTRFw2Fvw/Drops%20of%20Jupiter/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ANeHEmpPa3O_srvqjJkNRk8/Drops%20of%20Jupiter/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      piano:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AGuS58qaV6w151ijoJnSTh8/Drops%20of%20Jupiter/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      other:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AEG6PMD45c90hX_CDf5rOHI/Drops%20of%20Jupiter/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
    }
  },
  {
    id: "how-it-is",
    title: "How It Is",
    artist: "Walk Off the Earth",
    key: "Am",
    original: "audio/source/How It Is.m4a",
    chartPdf: "charts-pdf/how-it-is-walk-off-the-earth-chart.pdf",
    stems: {
      vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AEMr5OCgSlrO4VRja5NqPko/How%20It%20Is/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      drums:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AGAtFhNISZ5nCqNZxRD1H30/How%20It%20Is/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      bass:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ADVZW54Ak-uBrtx7UdyyIKc/How%20It%20Is/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ALXCQC1L088npZSUwwHL8v0/How%20It%20Is/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      piano:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ALxX2KDVeDFECIgxAvFQN8c/How%20It%20Is/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      other:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AIFOhO5Kj5zozmuJypeRW1w/How%20It%20Is/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
    }
  },
  {
    id: "rocket-man",
    title: "Rocket Man",
    artist: "Elton John",
    key: "G",
    tempo: 136,
    original: "audio/source/Rocket Man (G).m4a",
    chartPdf: "charts-pdf/rocket-man-elton-john-chart.pdf",
    notes: "Played in G (original is B♭).",
    stems: {
      vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AFSzeGUS3Cx50m2DwYSuNBU/Rocket%20Man%20%28G%29/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      drums:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AC7S9AJrDkU6BlvqOQUbsgc/Rocket%20Man%20%28G%29/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      bass:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AAy4k77-88ZhaVFcel4RIkE/Rocket%20Man%20%28G%29/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ALPlYz5e_7GE2ISVrDNTjlE/Rocket%20Man%20%28G%29/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      piano:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AI3mcJLTcm56OZ-2yzS0fDY/Rocket%20Man%20%28G%29/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      other:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AAASUGCQuOcsrc5sUNFaCS0/Rocket%20Man%20%28G%29/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
    }
  },
  {
    id: "time",
    title: "Time",
    artist: "Pink Floyd",
    key: "F♯m",
    tempo: 123,
    original: "audio/source/Time.m4a",
    chordsheet: "https://www.chordsheet.com/song/462940",
    chartPdf: "charts-pdf/time-pink-floyd-chart.pdf",
    notes: "Chords-only chart; bar counts checked against the bass stem of the album version. Same chart is in charts-chordsheet/time-pink-floyd.txt for pasting into chordsheet.com.",
    stems: {
      vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AB6a4RbepIBVZ1x0vKKIC18/Time/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      drums:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AAehr03gcd7BTBUdKu_xH-k/Time/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      bass:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ALGfP4CesT9o5i3sUVUC8oQ/Time/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AFWhGsgDfW4h27fWkmzLFng/Time/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      piano:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ADl05xvTaQUp_uKPH-Dp1KQ/Time/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      other:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AOwGJe8RgsZP2Wazhr3bPbU/Time/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
    }
  },
  {
    id: "tubthumping",
    title: "Tubthumping",
    artist: "Chumbawamba",
    key: "D",
    tempo: 104,
    original: "audio/source/Tubthumping.m4a",
    chartPdf: "charts-pdf/tubthumping-chumbawumba-chart.pdf",
    stems: {
      vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ANuoohelXLnWzwNeNtQb1mw/Tubthumping/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      drums:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AHt1E_me4BEIOxBS7r5rZio/Tubthumping/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      bass:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ACPDPg2HPb9aJXRbuCv0pKQ/Tubthumping/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AEEB93_B7XPxoxPSAbz4Tbw/Tubthumping/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      piano:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AHIHzQ_xdPBglAF26Oqpd80/Tubthumping/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      other:  "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AFXXoll2qo4APA12rSFiK1M/Tubthumping/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
    }
  },
  {
    id: "people-get-ready",
    title: "People Get Ready",
    artist: "Jeff Beck",
    key: "D",
    tempo: 72,
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/people-get-ready-jeff-beck-chart.pdf",
    notes: "Final verse modulates up to E♭."
  },
  {
    id: "while-my-guitar-gently-weeps",
    title: "While My Guitar Gently Weeps",
    artist: "The Beatles",
    key: "Am",
    tempo: 116,
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/while-my-guitar-gently-weeps-the-beatles-chart.pdf"
  },

  /* --- Imported charts, not yet assigned to a set --- */
  {
    id: "its-the-end-of-the-world",
    title: "It's the End of the World",
    artist: "R.E.M.",
    key: "G",
    tempo: 103,
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/It's the End of the World - R.E.M..pdf"
  },
  {
    id: "la-isla-bonita",
    title: "La Isla Bonita",
    artist: "Madonna",
    key: "C♯m",
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/La Isla Bonita - Madonna.pdf"
  },
  {
    id: "listen-to-the-music",
    title: "Listen to the Music",
    artist: "Doobie Brothers",
    key: "D",
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Listen to the Music.pdf"
  },
  {
    id: "modern-love",
    title: "Modern Love",
    artist: "David Bowie",
    key: "C",
    tempo: 182,
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Modern Love - David Bowie.pdf"
  },
  {
    id: "i-wanna-dance-with-somebody",
    title: "I Wanna Dance With Somebody",
    artist: "Whitney Houston",
    key: "G♭",
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/I Wanna Dance With Somebody - Whitney Houston.pdf"
  },
  {
    id: "i-cant-go-for-that",
    title: "I Can't Go For That",
    artist: "Daryl Hall & Cee Lo Green",
    key: "Fm",
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/I Can't Go For That.pdf",
    notes: "Artist billing as printed on the chart (mashup arrangement)."
  },
  {
    id: "dancing-queen",
    title: "Dancing Queen",
    artist: "ABBA",
    key: "A",
    tempo: 101,
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Dancing Queen - ABBA.pdf"
  },
  {
    id: "aint-nobody",
    title: "Ain't Nobody",
    artist: "Chaka Khan",
    key: "E♭m",
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Ain't Nobody - Chaka Khan.pdf"
  },
  {
    id: "i-heard-it-through-the-grapevine",
    title: "I Heard It Through the Grapevine",
    artist: "Gladys Knight & the Pips",
    key: "C",
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/I Heard It Through the Grapevine - Gladys Knight and the Pips.pdf"
  },
  {
    id: "superstition",
    title: "Superstition",
    artist: "Stevie Wonder",
    key: "Em",
    tempo: 100,
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Superstition - Stevie Wonder.pdf"
  },
  {
    id: "blue-skies",
    title: "Blue Skies",
    artist: "Eva Cassidy",
    key: "B♭m",
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Blue Skies (chords) - Eva Cassidy.pdf"
  },
  {
    id: "mercy",
    title: "Mercy",
    artist: "Duffy",
    key: "G",
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Mercy - Duffy.pdf"
  },
  {
    id: "take-the-money-and-run",
    title: "Take The Money and Run",
    artist: "Steve Miller Band",
    key: "G",
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Take The Money and Run - Steve Miller Band.pdf"
  },
  {
    id: "the-river-of-dreams",
    title: "The River of Dreams",
    artist: "Billy Joel",
    key: "E",
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/The River of Dreams - Billy Joel (E).pdf"
  },
  {
    id: "ocean-eyes",
    title: "Ocean Eyes",
    artist: "Billie Eilish",
    key: "C",
    tempo: 145,
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/ocean eyes.pdf"
  },
  {
    id: "let-her-go",
    title: "Let Her Go",
    artist: "Passenger",
    key: "Em",
    tempo: 75,
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Let Her Go - Passenger.pdf"
  },
  {
    id: "ill-be-there",
    title: "I'll Be There",
    artist: "Walk Off the Earth",
    key: "F♯m",
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/I'll Be There - Walk Off the Earth.pdf"
  },
  {
    id: "drowning-in-the-sea-of-love",
    title: "Drowning in the Sea of Love",
    artist: "Eva Cassidy",
    key: "Cm",
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Drowning in the Sea of Love - Eva Cassidy.pdf"
  },
  {
    id: "love-sneakin-up-on-you",
    title: "Love Sneakin' Up On You",
    artist: "Bonnie Raitt",
    key: "D",
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Love Sneakin' Up On You - Bonnie Raitt.pdf"
  },
  {
    id: "sweet-dreams-seven-nation-army",
    title: "Sweet Dreams / Seven Nation Army",
    artist: "Eurythmics / The White Stripes (mashup)",
    key: "Cm",
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Sweet Dreams - Seven Nation Army.pdf",
    notes: "Title/artist inferred from filename — verify this is the intended mashup arrangement."
  },
  {
    id: "back-on-the-chain-gang",
    title: "Back On the Chain Gang",
    artist: "Pretenders",
    key: "D",
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Back On the Chain Gang - Pretenders.pdf"
  },
  {
    id: "all-that-you-dream",
    title: "All That You Dream",
    artist: "Little Feat",
    key: "G",
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/All That You Dream.pdf"
  },
  {
    id: "insider",
    title: "Insider",
    artist: "Tom Petty & the Heartbreakers (feat. Stevie Nicks)",
    key: "A",
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Insider - Tom Petty & the Heartbreakers & Stevie Nicks.pdf"
  },
  {
    id: "exs-and-ohs",
    title: "Ex's & Oh's",
    artist: "Elle King",
    key: "Em",
    tempo: 140,
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Ex's & Oh's - Elle King.pdf"
  },
  {
    id: "higher-love",
    title: "Higher Love",
    artist: "Steve Winwood",
    key: "G",
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Higher Love - Steve Winwood.pdf"
  },
  {
    id: "just-the-two-of-us",
    title: "Just the Two of Us",
    artist: "Bill Withers",
    key: "E♭",
    tempo: 96,
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Just the Two of Us - Bill Withers.pdf"
  },
  {
    id: "everybody-wants-to-rule-the-world",
    title: "Everybody Wants to Rule the World",
    artist: "Tears for Fears",
    key: "D",
    tempo: 112,
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Everybody Wants to Rule the World - D.pdf",
    notes: "Source filename was truncated (\"- D.pdf\") — artist inferred, please verify."
  },
  {
    id: "love-letter",
    title: "Love Letter",
    artist: "Bonnie Raitt",
    key: "D",
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Love Letter - Bonnie Raitt.pdf"
  },
  {
    id: "tainted-love",
    title: "Tainted Love",
    artist: "Soft Cell",
    key: "Gm",
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Tainted Love - Soft Cell.pdf"
  },
  {
    id: "angel-from-montgomery",
    title: "Angel from Montgomery",
    artist: "John Prine",
    key: "E",
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Angel from Montgomery - John Prine.pdf"
  },
  {
    id: "something-to-talk-about",
    title: "Something to Talk About",
    artist: "Bonnie Raitt",
    key: "A♭",
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Something to Talk About - Bonnie Raitt.pdf"
  },
  {
    id: "walk-on-the-ocean",
    title: "Walk On the Ocean",
    artist: "Toad the Wet Sprocket",
    key: "B",
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/Walk On the Ocean - Toad the Wet Sprocket.pdf"
  },
  {
    id: "i-believe-im-in-love-with-you",
    title: "I Believe I'm In Love With You",
    artist: "Bonnie Raitt",
    key: "C",
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/I Believe I'm In Love With You - Bonnie Raitt.pdf"
  },
  {
    id: "you-can-leave-your-hat-on",
    title: "You Can Leave Your Hat On",
    artist: "Joe Cocker",
    key: "C",
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/You Can Leave Your Hat On.pdf",
    notes: "Artist not printed on chart, filled in from common knowledge — please verify."
  },
  {
    id: "rock-this-town",
    title: "Rock This Town",
    artist: "Stray Cats",
    key: "D",
    tempo: 100,
    drumBass: null,
    noDrums: null,
    chartPdf: "charts-pdf/rock this town official.pdf"
  },

  /* --- Added for the Nov 28 Hook'd setlist; no chart or audio yet --- */
  {
    id: "lovely-day",
    title: "Lovely Day",
    artist: "Bill Withers",
    key: "E",
    tempo: 98,
    chartPdf: "charts-pdf/lovely-day-bill-withers-chart.pdf",
    notes: "Added for the Nov 28 setlist.",
    stems: {
      vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AAbU1oOD-1PeWY-D2DJ9-js/Lovely%20Day/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      drums:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AHfl7GOjj7LL02TbyOb7Fsc/Lovely%20Day/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      bass:    "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AMet33Pjt7Kv3lxY0mlWY2I/Lovely%20Day/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AARDk4-B5hog83eoz1Y6FYw/Lovely%20Day/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      piano:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AJ8I2FecGaE9dAp2oMZcbQc/Lovely%20Day/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      other:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AAZbrCSE0gmusbAcdaWlDdI/Lovely%20Day/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
    }
  },
  {
    id: "use-me",
    title: "Use Me",
    artist: "Bill Withers",
    key: "Em",
    tempo: 78,
    chartPdf: "charts-pdf/use-me-bill-withers-chart.pdf",
    notes: "Added for the Nov 28 setlist.",
    stems: {
      vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AClIMFdGIfbwYtLm_e3oYq0/Use%20Me/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      drums:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AA9EFeAFLuOXF3FTB3cwfcU/Use%20Me/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      bass:    "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AK02M32X5nJ7cgjEwcH3CB4/Use%20Me/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ANgfTP9Ja5oD8Abof7D_9Oo/Use%20Me/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      piano:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AKTkvYeitGNCwj6mIOQngbE/Use%20Me/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      other:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ALkI5GgTgaKPamIUSWDsJcY/Use%20Me/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
    }
  },
  {
    id: "wicked-game",
    title: "Wicked Game",
    artist: "Chris Isaak",
    key: "Bm",
    tempo: 112,
    chartPdf: "charts-pdf/wicked-game-chris-isaak-chart.pdf",
    notes: "Added for the Nov 28 setlist.",
    stems: {
      vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AOqQN80ssL81Ib0qfFrPfGI/Wicked%20Game/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      drums:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ALX-rpwvNo5W_vKjE989QcE/Wicked%20Game/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      bass:    "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AGMHyQFj09L0FecS7Q4QXis/Wicked%20Game/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ALonEqEe0oJg8j4xZTzTBmU/Wicked%20Game/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      piano:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AC3YsZpwPZ36_vDODj73A2c/Wicked%20Game/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      other:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AEWQnM_2DQc0UTKDTkB92Io/Wicked%20Game/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
    }
  },
  {
    id: "rolling-in-the-deep",
    title: "Rolling in the Deep",
    artist: "Adele",
    key: "Am",
    tempo: 105,
    notes: "Added for the Nov 28 setlist. Chart still to come.",
    stems: {
      vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AG148cYlCLCJsB5oV_Z4m-w/Rolling%20in%20the%20Deep%20%28Am%29/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      drums:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AKmcwFS9ZYMWTPwpoA9rwAs/Rolling%20in%20the%20Deep%20%28Am%29/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      bass:    "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AGX-ko-osoKAEeqzqHay_v4/Rolling%20in%20the%20Deep%20%28Am%29/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AHNhreK8DFs90eatQJXIlw8/Rolling%20in%20the%20Deep%20%28Am%29/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      piano:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AElZODPOEYm1Dv2ykEi-wOg/Rolling%20in%20the%20Deep%20%28Am%29/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      other:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AOAhiTFeIrHCSFCGgG2vwo4/Rolling%20in%20the%20Deep%20%28Am%29/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
    }
  },
  {
    id: "miss-you",
    title: "Miss You",
    artist: "The Rolling Stones",
    key: "Am",
    tempo: 110,
    chartPdf: "charts-pdf/miss-you-rolling-stones-chart.pdf",
    notes: "Added for the Nov 28 setlist. Am7 / Dm7 groove, 2 bars each; F Em7 Dm7 bridge. Bar counts are best guesses from the album version.",
    stems: {
      vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ALo--espUIymQFPrT5CBLE0/Miss%20You/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      drums:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AGRotOxGSdu-SF1XnJd7P70/Miss%20You/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      bass:    "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AAzX3GDniBmKOQVUTSC7H1M/Miss%20You/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AL6Ed_uwShJBnCW9E4ern70/Miss%20You/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      piano:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AB4wdzNs6AsLj5zTHJbgvQ4/Miss%20You/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      other:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ANJlVf60A7Sm4YVL9-AwDo4/Miss%20You/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
    }
  },
  {
    id: "gidget",
    title: "Gidget",
    artist: "Free Nationals",
    notes: "Added for the Nov 28 setlist. Key and chart still to come.",
    stems: {
      vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AKn8DhlZtgfol2vjCvwTvgg/Gidget/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      drums:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AFh3t-ALBjvbN9ON3kzzTh4/Gidget/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      bass:    "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AKg5VrrcbAl31LAdzQ6JZrM/Gidget/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AKBK00uM7WiDTxx9PZ_O5cY/Gidget/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      piano:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AJXVgoPg_fSp7x-txqSXx28/Gidget/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      other:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AAf1xRklzj2p91CmGf21lGk/Gidget/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
    }
  },
  {
    id: "lets-stay-together",
    title: "Let's Stay Together",
    artist: "Al Green",
    tempo: 102,
    notes: "Key and chart still to come.",
    stems: {
      vocals: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AGQffvpavGnOTh5HIcVFHQ4/Let%27s%20Stay%20Together/vocals.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      drums:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AHKtQyoE38ZQiaiUVIAceZo/Let%27s%20Stay%20Together/drums.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      bass:    "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AKgqKfrTadEmg1c7pXnalWs/Let%27s%20Stay%20Together/bass.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      guitar: "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ALXx8T0qpYAjqfmLdKJzHA0/Let%27s%20Stay%20Together/guitar.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      piano:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/AAMZWMaZoRL_qlOtM5ZzX88/Let%27s%20Stay%20Together/piano.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1",
      other:   "https://dl.dropboxusercontent.com/scl/fo/0waan84y9e3bucvp5b8wn/ADsgnYiEMm_ZxCg8g7RQuOU/Let%27s%20Stay%20Together/other.m4a?rlkey=mk5mu1nd86p94788qv7wiyaw3&dl=1"
    }
  },
  {
    id: "wish-you-were-here",
    title: "Wish You Were Here",
    artist: "Pink Floyd",
    key: "G",
    tempo: 60,
    notes: "Chords-only chart; bar counts are best guesses from the album version. Same chart is in charts-chordsheet/wish-you-were-here-pink-floyd.txt for pasting into chordsheet.com."
  }
];
