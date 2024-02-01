const AlbumInfo = [
  {
    title: "The Piper at the Gates of Dawn",
    year: "1967",
    rating: 4,
  },
  {
    title: "A Saucerful of Secrets",
    year: "1968",
    rating: 3,
  },
  {
    title: "More",
    year: "1969",
    rating: 2,
  },
  {
    title: "Ummagumma",
    year: "1969",
    rating: 1,
  },
  {
    title: "Atom Heart Mother",
    year: "1970",
    rating: 2,
  },
  {
    title: "Meddle",
    year: "1971",
    rating: 3,
  },
  {
    title: "Obscured by Clouds",
    year: "1972",
    rating: 3,
  },
  {
    title: "The Dark Side of the Moon",
    year: "1973",
    rating: 5,
  },
  {
    title: "Wish You Were Here",
    year: "1975",
    rating: 5,
  },
  {
    title: "Animals",
    year: "1977",
    rating: 4,
  },
  {
    title: "The Wall",
    year: "1979",
    rating: 4,
  },
  {
    title: "The Final Cut",
    year: "1983",
    rating: 1,
  },
  {
    title: "A Momentary Lapse of Reason",
    year: "1987",
    rating: 4,
  },
  {
    title: "The Division Bell",
    year: "1994",
    rating: 4,
  },
  {
    title: "The Endless River",
    year: "2014",
    rating: 3,
  },
];

AlbumInfo.forEach(album => {
  const title = album.title;
  const titleNoSpace = title.replace(/\s/g, '');
  album.coverArt = titleNoSpace.toLowerCase() + ".jpg";
})

export default AlbumInfo;