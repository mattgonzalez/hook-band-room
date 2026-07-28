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
          "goin-down",
          "down-under",
          "mrs-robinson",
          "crazy-little-thing",
          "blackbird",
          "fire-and-rain",
          "killing-me-softly",
          "moondance",
          "i-still-havent-found",
          "wagon-wheel",
          "hook",
          "just-what-i-needed"
        ]
      },
      {
        name: "Set 2",
        songs: [
          "i-gotta-feeling",
          "keep-your-hands-to-yourself",
          "crazy",
          "be-my-girl",
          "eleanor-rigby",
          "aint-no-sunshine",
          "hello",
          "lights",
          "lovin-touchin-squeezin",
          "two-tickets-to-paradise",
          "i-will-survive",
          "come-together"
        ]
      },
      {
        name: "Set 3",
        songs: [
          "you-wreck-me",
          "sexyback",
          "make-you-feel-my-love",
          "free-fallin",
          "sultans-of-swing",
          "get-lucky",
          "rikki-dont-lose-that-number",
          "tennessee-whiskey",
          "valerie",
          "dont-stop-me-now"
        ]
      }
    ]
  }
];
