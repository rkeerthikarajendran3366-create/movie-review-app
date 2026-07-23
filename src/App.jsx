import { useEffect, useState } from "react";
import "./App.css";

import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";


const API_KEY = "892a92de";


function App() {


  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState("");

  const [selectedMovie, setSelectedMovie] = useState(null);

  const [reviews, setReviews] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");




  // Load Popular Movies

  async function loadPopularMovies() {


    setLoading(true);

    setError("");



    const keywords = [

      "Avatar",
      "Titanic",
      "Inception",
      "Interstellar",
      "The Dark Knight",
      "Avengers",
      "Iron Man",
      "Spider-Man",
      "Doctor Strange",
      "Captain America",
      "Black Panther",
      "Thor",
      "Guardians of the Galaxy",
      "Joker",
      "Frozen",
      "Moana",
      "Finding Nemo",
      "Toy Story",
      "Cars",
      "Kung Fu Panda",
      "Harry Potter",
      "Lord of the Rings",
      "John Wick",
      "Mission Impossible",
      "Fast and Furious",
      "Transformers",
      "Baahubali",
      "RRR"

    ];



    try {


      let allMovies = [];



      for (const keyword of keywords) {


        const response = await fetch(

          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(keyword)}`

        );


        const data = await response.json();



        if (data.Response === "True") {

          allMovies.push(...data.Search);

        }


      }





      const uniqueMovies = Array.from(

        new Map(

          allMovies.map(movie => [movie.imdbID, movie])

        ).values()

      );





      const filteredMovies = uniqueMovies.filter(
        movie =>
          movie.Poster &&
          movie.Poster !== "N/A"
      );


      // Fetch IMDb ratings for every movie

      const moviesWithRatings = await Promise.all(

        filteredMovies.map(async (movie) => {

          const response = await fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`
          );


          const details = await response.json();

          return {
            ...movie,

            imdbRating:
              details.imdbRating !== "N/A"
                ? details.imdbRating
                : "0",

            genre:
              details.Genre !== "N/A"
                ? details.Genre
                : "Unknown"
          };


        })

      );


      setMovies(moviesWithRatings);



    }

    catch (error) {

      console.log(error);

      setError("Failed to load movies");

    }

    finally {

      setLoading(false);

    }


  }





  // Search Movies


  async function searchMovies() {


    if (!search.trim()) {

      loadPopularMovies();

      return;

    }



    setLoading(true);

    setError("");



    try {


      const response = await fetch(

        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(search)}`

      );



      const data = await response.json();




      if (data.Response === "True") {


        const result = data.Search.filter(

          movie =>

            movie.Poster &&

            movie.Poster !== "N/A"

        );



        const moviesWithRatings = await Promise.all(

          result.map(async (movie) => {


            const response = await fetch(

              `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`

            );


            const details = await response.json();

            return {
              ...movie,

              imdbRating:
                details.imdbRating !== "N/A"
                  ? details.imdbRating
                  : "0",

              genre:
                details.Genre !== "N/A"
                  ? details.Genre
                  : "Unknown"
            };

          })

        );


        setMovies(moviesWithRatings);



      }

      else {


        setMovies([]);

        setError("No movies found");


      }



    }

    catch (error) {


      console.log(error);

      setError("Search failed");


    }

    finally {


      setLoading(false);


    }


  }







  // Open Movie Details

  function openMovie(movie) {

    setSelectedMovie(movie);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }








  // Back Button Logic


  function goBack() {


    setSelectedMovie(null);


    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });


  }







  // ⭐ Star Rating + Review Logic


  function addReview(review) {



    const newReview = {


      id: Date.now(),


      movieId: selectedMovie.imdbID,


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

      "reviews",

      JSON.stringify(updatedReviews)

    );


  }







  // Load Reviews


  useEffect(() => {


    const savedReviews =

      JSON.parse(

        localStorage.getItem("reviews")

      ) || [];



    setReviews(savedReviews);



    loadPopularMovies();



  }, []);









  return (



    <div className="app">






      <h1>

        🎬 Movie Review App

      </h1>







      {

        !selectedMovie &&



        <div className="search-box">


          <input


            type="text"


            placeholder="Search movies..."


            value={search}


            onChange={

              e => setSearch(e.target.value)

            }


          />




          <button onClick={searchMovies}>

            Search

          </button>



        </div>


      }







      {


        selectedMovie ?



          (

            <>





              <MovieDetails


                movie={selectedMovie}



                reviews={

                  reviews.filter(

                    review =>

                      review.movieId === selectedMovie.imdbID

                  )

                }



                goBack={goBack}



                addReview={addReview}


              />



            </>


          )



          :



          (

            <>


              {

                loading &&

                <h3>

                  Loading movies...

                </h3>

              }






              {

                error &&

                <h3 className="error">

                  {error}

                </h3>

              }







              <div className="movie-grid">



                {

                  movies.map(movie => (


                    <MovieCard


                      key={movie.imdbID}


                      movie={movie}


                      onClick={() => openMovie(movie)}


                    />


                  ))

                }


              </div>



            </>


          )


      }






    </div>


  );

}



export default App;