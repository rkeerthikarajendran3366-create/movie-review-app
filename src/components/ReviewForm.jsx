import { useState } from "react";

const REVIEW_API =
  "https://6a4b5ae8f5eab0bb6b62a0df.mockapi.io/api/reviews";


function ReviewForm({ movieId, onReviewAdded }) {

  const [name, setName] = useState("");

  const [review, setReview] = useState("");

  const [rating, setRating] = useState(5);

  const [loading, setLoading] = useState(false);



  async function handleSubmit(e) {

    e.preventDefault();



    if (!name.trim() || !review.trim()) {

      alert("Please fill all fields");

      return;

    }



    const newReview = {

      movieId: String(movieId),

      name,

      review,

      rating

    };



    try {

      setLoading(true);



      const res = await fetch(REVIEW_API, {

        method: "POST",

        headers: {

          "Content-Type": "application/json",

        },

        body: JSON.stringify(newReview),

      });



      if (!res.ok) {

        throw new Error("Review submission failed");

      }



      const data = await res.json();



      // instantly update MovieDetails page

      onReviewAdded(data);



      setName("");

      setReview("");

      setRating(5);



      alert("Review added successfully ⭐");



    } catch (err) {

      console.log(err);

      alert("Something went wrong");

    }

    finally {

      setLoading(false);

    }

  }





  return (

    <div className="review-form">


      <h2>
        ✍️ Add Your Review
      </h2>



      <form onSubmit={handleSubmit}>


        <input

          type="text"

          placeholder="Your Name"

          value={name}

          onChange={(e)=>
            setName(e.target.value)
          }

        />



        <textarea

          placeholder="Write your review..."

          value={review}

          onChange={(e)=>
            setReview(e.target.value)
          }

        />



        <select

          value={rating}

          onChange={(e)=>
            setRating(Number(e.target.value))
          }

        >

          {[1,2,3,4,5].map((num)=>(

            <option
              key={num}
              value={num}
            >

              {num} ⭐

            </option>

          ))}


        </select>




        <button
          type="submit"
          disabled={loading}
        >

          {loading
            ? "Submitting..."
            : "Submit Review ⭐"
          }

        </button>



      </form>


    </div>

  );

}


export default ReviewForm;