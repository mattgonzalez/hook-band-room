/* ============================================================
   GIGS — add or edit shows here. Newest can go anywhere;
   the site sorts and splits upcoming vs. past automatically.

   Each gig:
     date:   "YYYY-MM-DD"
     venue:  venue name
     city:   city (optional)
     time:   show time as text, e.g. "6–9 PM" (optional)
     loadIn: load-in time as text (optional)
     notes:  logistics — parking, PA, attire... (optional)
     sets:   list of { name, songs: [song ids from songs.js] }
   ============================================================ */
window.GIGS = [
  {
    date: "2026-08-07",
    venue: "NoTown Tavern",
    city: "Santa Barbara, CA",
    time: "6–9 PM",
    loadIn: "4:30 PM",
    notes: "House PA, bring vocal mics. Park in the back lot off Anacapa.",
    sets: [
      {
        name: "Set 1",
        songs: ["dock-of-the-bay", "use-me", "knockin", "aint-no-sunshine"]
      },
      {
        name: "Set 2",
        songs: ["thrill-is-gone", "stormy-monday", "hook-line-sinker"]
      }
    ]
  },
  {
    date: "2026-06-04",
    venue: "Figueroa Mountain Brewing",
    city: "Santa Barbara, CA",
    time: "6–9 PM",
    notes: "Great crowd — keep the soul block together next time.",
    sets: [
      {
        name: "Set 1",
        songs: ["use-me", "dock-of-the-bay", "thrill-is-gone"]
      }
    ]
  }
];
