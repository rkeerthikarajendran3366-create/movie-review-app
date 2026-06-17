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
    description: "A marine explores Pandora and joins the Na'vi.",
    trailer: "https://www.youtube.com/watch?v=5PSNL1qE6VY"
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
    description: "A romantic story aboard the Titanic.",
    trailer: "https://www.youtube.com/watch?v=kVrqfYjkTdQ"
  },
  {
    id: 3,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 9,
    director: "Christopher Nolan",
    cast: "Leonardo DiCaprio",
    duration: "148 min",
    image: "https://image.tmdb.org/t/p/w500/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg",
    description: "A thief enters dreams to steal secrets.",
    trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0"
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9,
    director: "Christopher Nolan",
    cast: "Christian Bale",
    duration: "152 min",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description: "Batman faces the Joker.",
    trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY"

  },
  {
    id: 5,
    title: "Avengers Endgame",
    year: 2019,
    genre: "Action",
    rating: 9,
    director: "Russo Brothers",
    cast: "Robert Downey Jr.",
    duration: "181 min",
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    description: "The Avengers fight Thanos.",
    trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY"

  },
  {
    id: 6,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 9,
    director: "Christopher Nolan",
    cast: "Matthew McConaughey",
    duration: "169 min",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description: "A journey through space and time.",
    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E"

  },
  {
    id: 7,
    title: "Bahubali",
    year: 2015,
    genre: "Action",
    rating: 9,
    director: "S. S. Rajamouli",
    cast: "Prabhas",
    duration: "159 min",
    image: "https://upload.wikimedia.org/wikipedia/en/5/5f/Baahubali_The_Beginning_poster.jpg",
    description: "An epic story of a warrior prince.",
    trailer: "https://www.youtube.com/watch?v=sOEg_YZQsTI"

  },
  {
    id: 8,
    title: "Home Alone",
    year: 1990,
    genre: "Comedy",
    rating: 8,
    director: "Chris Columbus",
    cast: "Macaulay Culkin",
    duration: "103 min",
    image: "https://picsum.photos/300/450?random=8",
    description: "Kevin protects his house from burglars.",
    trailer: "https://www.youtube.com/watch?v=jEDaVHmw7r4"

  },
  {
    id: 9,
    title: "Frozen",
    year: 2013,
    genre: "Animation",
    rating: 8,
    director: "Chris Buck",
    cast: "Kristen Bell",
    duration: "102 min",
    image: "https://picsum.photos/300/450?random=9",
    description: "Anna searches for Elsa.",
    trailer: "https://www.youtube.com/watch?v=TbQm5doF_Uc"

  },
  {
    id: 10,
    title: "Joker",
    year: 2019,
    genre: "Drama",
    rating: 9,
    director: "Todd Phillips",
    cast: "Joaquin Phoenix",
    duration: "122 min",
    image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    description: "The origin story of Joker.",
    trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY"

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
    description: "A cafe owner with a mysterious past faces dangerous enemies.",
    trailer: "https://www.youtube.com/watch?v=Po3jStA673E"

  },
  {
    id: 12,
    title: "Jailer",
    year: 2023,
    genre: "Action",
    rating: 8,
    director: "Nelson",
    cast: "Rajinikanth",
    duration: "168 min",
    image: "https://picsum.photos/300/450?random=12",
    description: "A retired jailer seeks justice.",
    trailer: "https://www.youtube.com/watch?v=Y5BeWdODPqo"

  },
  {
    id: 13,
    title: "Vikram",
    year: 2022,
    genre: "Action",
    rating: 9,
    director: "Lokesh Kanagaraj",
    cast: "Kamal Haasan",
    duration: "174 min",
    image: "https://picsum.photos/300/450?random=13",
    description: "An intense action thriller.",
    trailer: "https://www.youtube.com/watch?v=OKBMCL-frPU"

  },
  {
    id: 14,
    title: "RRR",
    year: 2022,
    genre: "Action",
    rating: 9,
    director: "S. S. Rajamouli",
    cast: "NTR, Ram Charan",
    duration: "182 min",
    image: "https://picsum.photos/300/450?random=14",
    description: "Epic historical action drama.",
    trailer: "https://www.youtube.com/watch?v=f_vbAtFSEc0"

  },
  {
    id: 15,
    title: "Toy Story",
    year: 1995,
    genre: "Animation",
    rating: 8,
    director: "John Lasseter",
    cast: "Tom Hanks",
    duration: "81 min",
    image: "https://picsum.photos/300/450?random=15",
    description: "Toys come alive when humans leave.",
    trailer: "https://www.youtube.com/watch?v=KYz2wyBy3kc"

  },
  {
    id: 16,
    title: "Finding Nemo",
    year: 2003,
    genre: "Animation",
    rating: 8,
    director: "Andrew Stanton",
    cast: "Albert Brooks",
    duration: "100 min",
    image: "https://picsum.photos/300/450?random=16",
    description: "A father fish searches for his son.",
    trailer: "https://www.youtube.com/watch?v=wZdpNglLbt8"

  },
  {
    id: 17,
    title: "The Notebook",
    year: 2004,
    genre: "Romance",
    rating: 8,
    director: "Nick Cassavetes",
    cast: "Ryan Gosling",
    duration: "123 min",
    image: "https://picsum.photos/300/450?random=17",
    description: "A touching romantic drama.",
    trailer: "https://www.youtube.com/watch?v=FC6biTjEyZw"

  },
  {
    id: 18,
    title: "La La Land",
    year: 2016,
    genre: "Romance",
    rating: 8,
    director: "Damien Chazelle",
    cast: "Emma Stone, Ryan Gosling",
    duration: "128 min",
    image: "https://picsum.photos/300/450?random=18",
    description: "A musical love story.",
    trailer: "https://www.youtube.com/watch?v=0pdqf4P9MB8"

  },
  {
    id: 19,
    title: "The Hangover",
    year: 2009,
    genre: "Comedy",
    rating: 8,
    director: "Todd Phillips",
    cast: "Bradley Cooper",
    duration: "100 min",
    image: "https://picsum.photos/300/450?random=19",
    description: "Friends wake up after a wild night in Las Vegas.",
    trailer: "https://www.youtube.com/watch?v=tcdUhdOlz9M"

  },
  {
    id: 20,
    title: "Mr Bean's Holiday",
    year: 2007,
    genre: "Comedy",
    rating: 8,
    director: "Steve Bendelack",
    cast: "Rowan Atkinson",
    duration: "90 min",
    image: "https://picsum.photos/300/450?random=20",
    description: "Mr Bean wins a trip to France and creates hilarious chaos.",
    trailer: "https://www.youtube.com/watch?v=hSxLUd8aly4"
  }
];

export default movies;