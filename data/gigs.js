/* ============================================================
   GIGS — add or edit shows here. Newest can go anywhere;
   the site sorts and splits upcoming vs. past automatically.

   Each gig:
     date:   "YYYY-MM-DD"
     venue:  venue name
     city:   city (optional)
     address: street address (optional). Drives the embedded map and
             the Directions link. Without it the map falls back to
             searching "venue, city".
     mapUrl: the venue's own Google Maps link, for the Directions
             button (optional). Without it we build a search URL
             from the address.
     time:   show time as text, e.g. "6–9 PM" (optional)
     loadIn: load-in time as text (optional)
     notes:  logistics — parking, PA, attire... (optional)
     sets:   list of { name, songs: [song ids from songs.js] }
   ============================================================ */
window.GIGS = [
  {
    date: "2026-08-07",
    venue: "NoTown Tavern",
    city: "Goleta, CA",
    address: "5114 Hollister Ave, Santa Barbara, CA 93111",
    mapUrl: "https://www.google.com/maps/place/notown+tavern/data=!4m2!3m1!1s0x80e93ff49aaad099:0xa9f33a318e4aa6ab",
    time: "8-11 PM",
    loadIn: "Sound system setup at 5 PM",
    notes: "Park in front.",
    sets: [
      {
        name: "Set 1",
        songs: [
          "crazy-little-thing",
          "down-under",
          "blackbird",
          "wagon-wheel",
          "fire-and-rain",
          "aint-no-sunshine",
          "make-you-feel-my-love",
          "i-still-havent-found",
          "hello",
          "hook"
        ]
      },
      {
        name: "Set 2",
        songs: [
          "goin-down",
          "keep-your-hands-to-yourself",
          "mrs-robinson",
          "colors",
          "two-tickets-to-paradise",
          "rikki-dont-lose-that-number",
          "lights",
          "eleanor-rigby",
          "lovin-touchin-squeezin",
          "free-fallin",
          "come-together",
          "just-what-i-needed"
        ]
      },
      {
        name: "Set 3",
        songs: [
          "i-gotta-feeling",
          "killing-me-softly",
          "crazy",
          "be-my-girl",
          "i-will-survive",
          "you-wreck-me",
          "sultans-of-swing",
          "get-lucky",
          "tennessee-whiskey",
          "valerie"
        ]
      }
    ]
  },
    {
    date: "2026-08-12",
    venue: "Figueroa Mountain Brewing Co,",
    city: "Santa Barbara, CA",
    address: "137 Anacapa St F, Santa Barbara, CA 93101",
    mapUrl: "https://maps.app.goo.gl/YNJi3TJUVsVhNXrv8",
    time: "7-10 PM",
    loadIn: "Sound system setup at 4 PM",
    notes: "",
    sets: [
      {
        name: "Set 1",
        songs: [
          "crazy-little-thing",
          "down-under",
          "blackbird",
          "wagon-wheel",
          "fire-and-rain",
          "aint-no-sunshine",
          "make-you-feel-my-love",
          "i-still-havent-found",
          "hello",
          "hook"
        ]
      },
      {
        name: "Set 2",
        songs: [
          "goin-down",
          "keep-your-hands-to-yourself",
          "mrs-robinson",
          "colors",
          "two-tickets-to-paradise",
          "rikki-dont-lose-that-number",
          "lights",
          "eleanor-rigby",
          "lovin-touchin-squeezin",
          "free-fallin",
          "come-together",
          "just-what-i-needed"
        ]
      },
      {
        name: "Set 3",
        songs: [
          "i-gotta-feeling",
          "killing-me-softly",
          "crazy",
          "be-my-girl",
          "i-will-survive",
          "you-wreck-me",
          "sultans-of-swing",
          "get-lucky",
          "tennessee-whiskey",
          "valerie"
        ]
      }
    ]
  }
];
