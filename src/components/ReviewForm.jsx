import { useState } from "react";

function ReviewForm({ movieId, onReviewAdded }) {

  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {

    e.preventDefault();

    if (!name.trim() || !review.trim()) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    const newReview = {
      id: Date.now(),
      movieId,
      name,
      review,
      rating,
    };

    // Get existing reviews for this movie
    const existingReviews =
      JSON.parse(localStorage.getItem(movieId)) || [];

    // Add new review
    const updatedReviews = [...existingReviews, newReview];

    // Save to Local Storage
    localStorage.setItem(
      movieId,
      JSON.stringify(updatedReviews)
    );

    // Update MovieDetails instantly
    onReviewAdded(newReview);

    // Clear form
    setName("");
    setReview("");
    setRating(5);

    setLoading(false);

    alert("⭐ Review added successfully!");
  }

  return (
    <div className="review-form">

      <h2>✍️ Add Your Review</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} ⭐
            </option>
          ))}
        </select>

        <button
          type="submit"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Review ⭐"}
        </button>

      </form>

    </div>
  );
}

export default ReviewForm;