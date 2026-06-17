import { useState } from "react";
import movies from "./movies";

function App() {
  const [search, setSearch] = useState("");
  const [genreFilter, setGenreFilter] = useState("All");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [review, setReview] = useState("");

  const [reviews, setReviews] = useState([
    { movie: "Avatar", text: "Amazing movie! ⭐⭐⭐⭐⭐" },
    { movie: "Titanic", text: "Beautiful love story ❤️" },
    { movie: "Bahubali", text: "Epic action scenes 🔥" },
  ]);

  const [userRatings, setUserRatings] = useState({});

  const addReview = () => {
    if (!review.trim()) return;

    setReviews([
      ...reviews,
      {
        movie: selectedMovie.title,
        text: review,
      },
    ]);

    setReview("");
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase()) &&
      (genreFilter === "All" || movie.genre === genreFilter)
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        background: "linear-gradient(to right,#141E30,#243B55)",
        color: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#FFD700",
          fontSize: "60px",
        }}
      >
        🎬 Movie Review App
      </h1>

      <p style={{ textAlign: "center" }}>
        Browse Movies • Read Reviews • Rate Movies
      </p>

      {!selectedMovie && (
        <>
          <div
            style={{
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            <input
              type="text"
              placeholder="Search Movie..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                padding: "10px",
                width: "250px",
                borderRadius: "10px",
              }}
            />

            <select
              value={genreFilter}
              onChange={(e) => setGenreFilter(e.target.value)}
              style={{
                padding: "10px",
                marginLeft: "10px",
                borderRadius: "10px",
              }}
            >
              <option value="All">All Movies</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Romance">Romance</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Animation">Animation</option>
              <option value="Drama">Drama</option>
            </select>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
            }}
          >
            {filteredMovies.map((movie) => (
              <div
                key={movie.id}
                style={{
                  backgroundColor: "rgba(0,0,0,0.7)",
                  padding: "15px",
                  borderRadius: "15px",
                }}
              >
                <img
                  src={movie.image}
                  alt={movie.title}
                  style={{
                    width: "100%",
                    height: "350px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />

                <h2 style={{ color: "#FFD700" }}>
                  {movie.title}
                </h2>

                <p>{movie.genre}</p>

                <p>⭐ {movie.rating}/10</p>

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
                        fontSize: "28px",
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

                <button
                  onClick={() => setSelectedMovie(movie)}
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    padding: "10px",
                    backgroundColor: "#FFD700",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {selectedMovie && (
        <div
          style={{
            backgroundColor: "#222",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <button
            onClick={() => setSelectedMovie(null)}
            style={{
              padding: "10px",
              marginBottom: "20px",
            }}
          >
            ⬅ Back to Home
          </button>

          <h2 style={{ color: "#FFD700" }}>
            {selectedMovie.title}
          </h2>

          <img
            src={selectedMovie.image}
            alt={selectedMovie.title}
            style={{
              width: "250px",
              borderRadius: "10px",
            }}
          />

          <p>
            <strong>Release Year:</strong>{" "}
            {selectedMovie.year}
          </p>

          <p>
            <strong>Genre:</strong>{" "}
            {selectedMovie.genre}
          </p>

          <p>
            <strong>IMDb Rating:</strong>{" "}
            {selectedMovie.rating}/10
          </p>

          <p>
            <strong>Director:</strong>{" "}
            {selectedMovie.director}
          </p>

          <p>
            <strong>Cast:</strong>{" "}
            {selectedMovie.cast}
          </p>

          <p>
            <strong>Duration:</strong>{" "}
            {selectedMovie.duration}
          </p>

          <h3>Story</h3>

          <p>{selectedMovie.description}</p>
          <div style={{ marginTop: "20px" }}>
            <a
              href={selectedMovie.trailer}
              target="_blank"
              rel="noreferrer"
            >
              <button
  onClick={() =>
    window.open(
      selectedMovie.trailer,
      "_blank"
    )
  }
  style={{
    padding: "10px 20px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  }}
>
  ▶ Watch Trailer
</button>
            </a>
          </div>

          <hr />

          <h3>Write Review</h3>

          <textarea
            rows="4"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            style={{
              width: "100%",
            }}
          />

          <br />
          <br />

          <button
            onClick={addReview}
            style={{
              padding: "10px",
              backgroundColor: "#FFD700",
              border: "none",
              borderRadius: "10px",
            }}
          >
            Submit Review
          </button>

          <h3>User Reviews</h3>

          {reviews
            .filter(
              (r) => r.movie === selectedMovie.title
            )
            .map((r, index) => (
              <p key={index}>⭐ {r.text}</p>
            ))}
        </div>
      )}
    </div>
  );
}

export default App;