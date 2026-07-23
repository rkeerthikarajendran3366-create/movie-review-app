function MovieDetails({ movie, goBack, addReview }) {


  const [details, setDetails] = useState(null);

  const [reviews, setReviews] = useState([]);

  const [loading, setLoading] = useState(true);



  useEffect(() => {

    fetchMovieDetails();

    loadReviews();

  }, [movie.imdbID]);






  async function fetchMovieDetails() {


    try {


      setLoading(true);



      const response = await fetch(

        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}&plot=full`

      );



      const data = await response.json();




      if(data.Response === "True"){

        setDetails(data);

      }
      else{

        setDetails(null);

      }



    }

    catch(error){


      console.log(error);

      setDetails(null);


    }

    finally{


      setLoading(false);


    }


  }







  function loadReviews(){


    const saved =

      JSON.parse(

        localStorage.getItem(movie.imdbID)

      ) || [];



    setReviews(saved);


  }







  // ⭐ Star Rating Review Save Logic


  function handleAddReview(review){



    const newReview = {


      id: Date.now(),

      name: review.name,

      review: review.review,

      rating: review.rating


    };




    const updatedReviews = [

      ...reviews,

      newReview

    ];




    setReviews(updatedReviews);





    localStorage.setItem(

      movie.imdbID,

      JSON.stringify(updatedReviews)

    );



    // update App state also

    if(addReview){

      addReview(review);

    }


  }








  // Back Button Logic


  function handleBack(){


    if(goBack){


      goBack();


    }


  }









  if(loading){


    return (

      <h2 className="center">

        Loading Movie Details...

      </h2>

    );


  }






  if(!details){


    return (

      <h2 className="center">

        Movie Not Found

      </h2>

    );


  }








  return (



    <div className="details-page">





      {/* Back Button */}


      <button

        className="back-btn"

        onClick={handleBack}

      >

        ⬅ Back to Movies

      </button>







      <div className="details-hero">


        <img

          src={

            details.Poster && details.Poster !== "N/A"

            ?

            details.Poster

            :

            "https://placehold.co/300x450?text=No+Poster"

          }


          alt={details.Title}


          className="details-image"


        />


      </div>







      <div className="details-content">



        <h1>

          {details.Title}

        </h1>







        <div className="movie-info">


          <span>

            🎭 <b>Genre:</b> {details.Genre}

          </span>



          <span>

            📅 <b>Year:</b> {details.Year}

          </span>



          <span>

            ⭐ IMDb {details.imdbRating}

          </span>


        </div>







        <p className="description">

          {details.Plot}

        </p>






        <p>
          🎬 <b>Director:</b> {details.Director}
        </p>


        <p>
          ✍️ <b>Writer:</b> {details.Writer}
        </p>


        <p>
          👥 <b>Actors:</b> {details.Actors}
        </p>


        <p>
          📆 <b>Released:</b> {details.Released}
        </p>


        <p>
          ⏱️ <b>Runtime:</b> {details.Runtime}
        </p>


        <p>
          🌐 <b>Language:</b> {details.Language}
        </p>


        <p>
          🏆 <b>Awards:</b> {details.Awards}
        </p>







        <a

          href={

          `https://www.youtube.com/results?search_query=${encodeURIComponent(
            details.Title + " official trailer"
          )}`

          }


          target="_blank"

          rel="noreferrer"

        >


          <button className="trailer-btn">

            ▶ Watch Trailer

          </button>



        </a>





      </div>









      {/* Review + Star Rating */}


      <ReviewForm

        movieId={movie.imdbID}

        onReviewAdded={handleAddReview}

      />









      {/* Reviews Display */}



      <div className="reviews">


        <h2>

          ⭐ User Reviews

        </h2>






        {

        reviews.length === 0


        ?


        (

          <p>

            No Reviews Yet. Be the first!

          </p>


        )


        :


        reviews.map(review=>(



          <div

            className="review-card"

            key={review.id}

          >


            <h3>

              👤 {review.name}

            </h3>



            <p>

              {"⭐".repeat(review.rating)}

              {"☆".repeat(5-review.rating)}

            </p>




            <p>

              {review.review}

            </p>



          </div>



        ))

        }



      </div>







    </div>


  );

}



export default MovieDetails;