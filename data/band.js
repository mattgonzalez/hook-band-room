/* ============================================================
   BAND — imagery and backline.

   heroImage: a wide photo shown behind the masthead (stage shot,
     band photo, venue). Drop the file in /images and set the path.
     If the file is missing, the site quietly skips it.

   gear: cards shown in the "Backline" strip at the bottom of the
     Songbook. image is optional — without one, a monogram tile
     renders instead.
   ============================================================ */
window.BAND = {
  heroImage: "images/guitar.webp",

  gear: [
    {
      name: "Strandberg Boden+ NX 7 True Temperament",
      owner: "Matt",
      image: "images/boden-nx7.jpg",
      notes: "Glacier Blue · TT frets · main electric"
    }
    // { name: "LR Baggs HiFi Duet acoustic rig", owner: "Matt", image: "images/acoustic.jpg", notes: "" },
  ]
};
