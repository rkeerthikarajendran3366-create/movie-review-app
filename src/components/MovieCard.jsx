function MovieCard({ movie, onClick }) {

    const fallbackImage =
        "https://placehold.co/300x450?text=No+Poster";


    return (

        <div className="movie-card">


            <div className="image-container">


                <img
                    src={
                        movie.Poster &&
                        movie.Poster !== "N/A"
                            ? movie.Poster
                            : fallbackImage
                    }

                    alt={movie.Title}

                    className="movie-image"

                    onError={(e) => {
                        e.target.src = fallbackImage;
                    }}

                />



                <div className="rating-badge">

                    ⭐ IMDb

                </div>


            </div>





            <div className="movie-content">



                <h2>

                    {movie.Title}

                </h2>





                {/* IMDb Rating */}

                <div className="movie-rating">

                    ⭐ {movie.imdbRating || "N/A"}

                </div>





                {/* Movie Genre */}

                <div className="genre-badge">

                    🎭 {movie.genre || "Unknown"}

                </div>





                <p>

                    🎬 <strong>Year:</strong> {movie.Year}

                </p>





                <p>

                    🎞️ <strong>Type:</strong> {movie.Type}

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