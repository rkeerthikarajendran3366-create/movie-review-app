function MovieCard({ movie, onClick }) {
    return (
        <div className="movie-card">

            <div className="image-container">

                <img
                    src={movie.image}
                    alt={movie.title}
                    className="movie-image"
                />


                <div className="rating-badge">
                    ⭐ {movie.rating}
                </div>

            </div>


            <div className="movie-content">

                <h2>
                    {movie.title}
                </h2>


                <span className="genre-tag">
                    {movie.genre}
                </span>


                <p>
                    🎬 <strong>Year:</strong> {movie.year}
                </p>


                <button
                    className="details-btn"
                    onClick={onClick}
                >
                    View Details →
                </button>

            </div>

        </div>
    );
}

export default MovieCard;