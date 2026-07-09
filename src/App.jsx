import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";

const MOVIES_API =
  "https://6a4b5ae8f5eab0bb6b62a0df.mockapi.io/api/movies";

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    filterMovies();
  }, [movies, search, genre]);

  async function fetchMovies() {
    try {
      const response = await fetch(MOVIES_API);

      if (!response.ok) {
        throw new Error("Unable to fetch movies");
      }

      const data = await response.json();

      setMovies(data);
      setFilteredMovies(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function filterMovies() {
    let list = [...movies];

    if (search.trim() !== "") {
      list = list.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (genre !== "All") {
      list = list.filter((movie) => movie.genre === genre);
    }

    setFilteredMovies(list);
  }

  const genres = [
    "All",
    ...new Set(movies.map((movie) => movie.genre))
  ];

  if (loading)
    return (
      <h2 className="center">
        Loading Movies...
      </h2>
    );

  if (error)
    return (
      <h2 className="center">
        {error}
      </h2>
    );

  if (selectedMovie) {
    return (
      <MovieDetails
        movie={selectedMovie}
        goBack={() => {
          setSelectedMovie(null);

          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      />
    );
  }

  return (
    <div className="container">

      <h1 className="title">
        🎬 Movie Explorer
      </h1>

      <div className="top-controls">

        <input
          type="text"
          placeholder="Search movie..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={genre}
          onChange={(e) =>
            setGenre(e.target.value)
          }
        >
          {genres.map((g) => (
            <option key={g}>
              {g}
            </option>
          ))}
        </select>

      </div>

      <div className="movie-grid">

        {filteredMovies.length === 0 ? (
          <h2>No Movies Found</h2>
        ) : (
          filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={() => {
                setSelectedMovie(movie);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            />
          ))
        )}

      </div>

    </div>
  );
}

export default App;