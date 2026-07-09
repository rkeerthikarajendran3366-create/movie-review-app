import { useEffect, useState } from "react";
import ReviewForm from "./ReviewForm";

const REVIEW_API =
    "https://6a4b5ae8f5eab0bb6b62a0df.mockapi.io/api/reviews";


function MovieDetails({ movie, goBack }) {

    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetchReviews();
    }, [movie.id]);



    async function fetchReviews() {

        try {

            const res = await fetch(REVIEW_API);

            const data = await res.json();


            setReviews(
                data.filter(
                    (r) =>
                        String(r.movieId) === String(movie.id)
                )
            );


        } catch (err) {

            console.log(err);

        }

    }



    function addReview(review) {

        setReviews((prev) => [
            ...prev,
            review
        ]);

    }



    return (

        <div className="details-page">


            <button
                className="back-btn"
                onClick={goBack}
            >
                ← Back to Movies
            </button>



            <div className="details-hero">


                <img
                    src={movie.image}
                    alt={movie.title}
                    className="details-image"
                />


            </div>




            <div className="details-content">


                <h1>
                    {movie.title}
                </h1>



                <div className="movie-info">


                    <span>
                        🎭 {movie.genre}
                    </span>


                    <span>
                        📅 {movie.year}
                    </span>


                    <span>
                        ⭐ {movie.rating}
                    </span>


                </div>




                <p className="description">

                    {movie.description}

                </p>





                {movie.trailer && (

                    <a
                        href={movie.trailer}
                        target="_blank"
                        rel="noreferrer"
                    >

                        <button className="trailer-btn">

                            ▶ Watch Trailer

                        </button>


                    </a>

                )}



            </div>





            <ReviewForm

                movieId={movie.id}

                onReviewAdded={addReview}

            />






            <div className="reviews">


                <h2>
                    ⭐ User Reviews
                </h2>




                {reviews.length === 0 ? (

                    <p>
                        No Reviews Yet. Be the first!
                    </p>


                ) : (


                    reviews.map((review) => (


                        <div
                            key={review.id}
                            className="review-card"
                        >


                            <h3>
                                👤 {review.name}
                            </h3>



                            <p>
                                ⭐ {review.rating}/5
                            </p>



                            <p>
                                {review.review}
                            </p>



                        </div>


                    ))

                )}



            </div>


        </div>

    );

}


export default MovieDetails;