import { useEffect, useState } from "react";

function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [userRatings, setUserRatings] = useState({});

  const API_KEY = "a697302a143030d3a6ec9b82fe0ea329";

  useEffect(() => {

    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });

  }, []);

  return (

    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >

      <h1
  style={{
    fontSize: "55px",
    textAlign: "center",
    marginBottom: "20px",
    color: "#FFD700",
    textShadow: "3px 3px 10px black",
    fontWeight: "bold",
  }}
>
  🎬 Movie Review App
</h1>

      <input
        type="text"
        placeholder="Search movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "10px",
          border: "none",
          fontSize: "16px",
        }}
      />

      <select
        onChange={(e) =>
          setRatingFilter(e.target.value)
        }
        style={{
          padding: "10px",
          marginLeft: "10px",
          borderRadius: "10px",
        }}
      >

        <option value="0">
          All Ratings
        </option>

        <option value="5">
          5+
        </option>

        <option value="7">
          7+
        </option>

        <option value="8">
          8+
        </option>

      </select>

      {selectedMovie && (

        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
            padding: "20px",
            borderRadius: "15px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >

          <h2>
            {selectedMovie.title}
          </h2>

          <p>
            Release Date:
            {selectedMovie.release_date}
          </p>

          <p>
            Rating:
            {selectedMovie.vote_average}
          </p>

          <p>
            {selectedMovie.overview}
          </p>

        </div>

      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >

        {movies
          .filter(
            (movie) =>
              movie.title
                .toLowerCase()
                .includes(search.toLowerCase()) &&
              movie.vote_average >= ratingFilter
          )
          .map((movie) => (

            <div
              key={movie.id}
              onClick={() =>
                setSelectedMovie(movie)
              }
              style={{
                backgroundColor:
                  "rgba(0,0,0,0.7)",
                borderRadius: "15px",
                padding: "15px",
                cursor: "pointer",
              }}
            >

              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width="100%"
                style={{
                  borderRadius: "10px",
                }}
              />

              <h3>
                {movie.title}
              </h3>

              <p>
                ⭐ {movie.vote_average}
              </p>

              <div>

                {[1, 2, 3, 4, 5].map((star) => (

                  <span
                    key={star}

                    onClick={() =>
                      setUserRatings({
                        ...userRatings,
                        [movie.id]: star,
                      })
                    }

                    style={{
                      cursor: "pointer",
                      fontSize: "25px",
                      color:
                        userRatings[movie.id] >= star
                          ? "gold"
                          : "gray",
                    }}
                  >
                    ★
                  </span>

                ))}

              </div>

            </div>

          ))}

      </div>

    </div>

  );
}

export default App;