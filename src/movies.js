const movies = [
  {
    id: 1,
    title: "Avatar",
    year: 2009,
    genre: "Sci-Fi",
    rating: 8,
    director: "James Cameron",
    cast: "Sam Worthington, Zoe Saldana",
    duration: "162 min",
    image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    description: "A marine explores Pandora and joins the Na'vi."
  },

  {
    id: 2,
    title: "Titanic",
    year: 1997,
    genre: "Romance",
    rating: 9,
    director: "James Cameron",
    cast: "Leonardo DiCaprio, Kate Winslet",
    duration: "194 min",
    image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    description: "A romantic story aboard the Titanic."
  },

  {
    id: 3,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 9,
    director: "Christopher Nolan",
    cast: "Leonardo DiCaprio, Tom Hardy",
    duration: "148 min",
    image: "https://image.tmdb.org/t/p/w500/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg",
    description: "A thief enters dreams to steal secrets."
  },

  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9,
    director: "Christopher Nolan",
    cast: "Christian Bale, Heath Ledger",
    duration: "152 min",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description: "Batman faces the Joker."
  },

  {
    id: 5,
    title: "Avengers Endgame",
    year: 2019,
    genre: "Action",
    rating: 9,
    director: "Russo Brothers",
    cast: "Robert Downey Jr., Chris Evans",
    duration: "181 min",
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    description: "The Avengers fight Thanos."
  },

  {
    id: 6,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 9,
    director: "Christopher Nolan",
    cast: "Matthew McConaughey, Anne Hathaway",
    duration: "169 min",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description: "A journey through space and time."
  },

  {
    id: 7,
    title: "Bahubali",
    year: 2015,
    genre: "Action",
    rating: 9,
    director: "S. S. Rajamouli",
    cast: "Prabhas, Rana Daggubati",
    duration: "159 min",
    image: "https://upload.wikimedia.org/wikipedia/en/5/5f/Baahubali_The_Beginning_poster.jpg",
    description: "An epic story of a warrior prince."
  },

  {
    id: 8,
    title: "Home Alone",
    year: 1990,
    genre: "Comedy",
    rating: 8,
    director: "Chris Columbus",
    cast: "Macaulay Culkin, Joe Pesci",
    duration: "103 min",
    image: "https://picsum.photos/300/450?random=8",
    description: "Young Kevin McCallister is accidentally left home alone and must protect his house from burglars."
  },

  {
    id: 9,
    title: "Frozen",
    year: 2013,
    genre: "Animation",
    rating: 8,
    director: "Chris Buck",
    cast: "Kristen Bell, Idina Menzel",
    duration: "102 min",
    image: "https://picsum.photos/300/450?random=9",
    description: "Anna searches for Elsa to save their kingdom from eternal winter."
  },

  {
    id: 10,
    title: "Joker",
    year: 2019,
    genre: "Drama",
    rating: 9,
    director: "Todd Phillips",
    cast: "Joaquin Phoenix, Robert De Niro",
    duration: "122 min",
    image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    description: "The origin story of Gotham's infamous villain."
  },

  {
    id: 11,
    title: "Leo",
    year: 2023,
    genre: "Action",
    rating: 8,
    director: "Lokesh Kanagaraj",
    cast: "Vijay, Trisha",
    duration: "164 min",
    image: "https://picsum.photos/300/450?random=11",
    description: "A café owner with a dark past faces dangerous enemies."
  },

  {
    id: 12,
    title: "Jailer",
    year: 2023,
    genre: "Action",
    rating: 8,
    director: "Nelson Dilipkumar",
    cast: "Rajinikanth, Vinayakan",
    duration: "168 min",
    image: "https://upload.wikimedia.org/wikipedia/en/c/cb/Jailer_2023_Tamil_film_poster.jpg",
    description: "A retired jailer seeks justice for his family."
  },

  {
    id: 13,
    title: "Vikram",
    year: 2022,
    genre: "Action",
    rating: 9,
    director: "Lokesh Kanagaraj",
    cast: "Kamal Haasan, Vijay Sethupathi",
    duration: "175 min",
    image: "https://upload.wikimedia.org/wikipedia/en/9/93/Vikram_2022_poster.jpg",
    description: "An action thriller involving a secret mission."
  },

  {
    id: 14,
    title: "RRR",
    year: 2022,
    genre: "Action",
    rating: 9,
    director: "S. S. Rajamouli",
    cast: "Ram Charan, NTR Jr.",
    duration: "182 min",
    image: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
    description: "A fictional story of two Indian revolutionaries."
  },

  {
    id: 15,
    title: "Toy Story",
    year: 1995,
    genre: "Animation",
    rating: 8,
    director: "John Lasseter",
    cast: "Tom Hanks, Tim Allen",
    duration: "81 min",
    image: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    description: "Toys come alive when humans are not around."
  },

  {
    id: 16,
    title: "Finding Nemo",
    year: 2003,
    genre: "Animation",
    rating: 8,
    director: "Andrew Stanton",
    cast: "Albert Brooks, Ellen DeGeneres",
    duration: "100 min",
    image: "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
    description: "A clownfish searches the ocean for his son."
  },

  {
    id: 17,
    title: "The Notebook",
    year: 2004,
    genre: "Romance",
    rating: 8,
    director: "Nick Cassavetes",
    cast: "Ryan Gosling, Rachel McAdams",
    duration: "124 min",
    image: "https://image.tmdb.org/t/p/w500/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg",
    description: "A touching story of enduring love."
  },

  {
    id: 18,
    title: "La La Land",
    year: 2016,
    genre: "Romance",
    rating: 8,
    director: "Damien Chazelle",
    cast: "Ryan Gosling, Emma Stone",
    duration: "128 min",
    image: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    description: "A musician and actress pursue their dreams."
  },

  {
    id: 19,
    title: "The Hangover",
    year: 2009,
    genre: "Comedy",
    rating: 8,
    director: "Todd Phillips",
    cast: "Bradley Cooper, Ed Helms",
    duration: "100 min",
    image: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
    description: "Friends try to piece together a wild night in Las Vegas."
  },

  {
    id: 20,
    title: "Mr Bean's Holiday",
    year: 2007,
    genre: "Comedy",
    rating: 8,
    director: "Steve Bendelack",
    cast: "Rowan Atkinson, Willem Dafoe",
    duration: "90 min",
    image: "https://picsum.photos/300/450?random=20",
    description: "Mr Bean's vacation becomes a hilarious adventure."
  }
];

export default movies;