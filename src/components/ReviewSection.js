// /src/components/Reviews.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../ReviewSection.css"; // Import styles for the reviews page

function Reviews({ user }) {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(5);

  useEffect(() => {
    // Fetch reviews from the backend
    const fetchReviews = async () => {
      const response = await axios.get("http://localhost:5000/api/reviews");
      setReviews(response.data);
    };

    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newReview.trim()) return;

    // Submit the new review
    const reviewData = {
      userEmail: user.email,
      review: newReview,
      rating,
    };

    const response = await axios.post("http://localhost:5000/api/reviews", reviewData);
    if (response.status === 200) {
      setReviews([response.data, ...reviews]);
      setNewReview("");
      setRating(5);
    }
  };

  return (
    <div className="reviews-container">
      <h2>Customer Reviews</h2>

      {/* Reviews List */}
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.userEmail}</h3>
            <p>{review.review}</p>
            <div className="rating">Rating: {review.rating}★</div>
          </div>
        ))}
      </div>

      {/* Add Review Section */}
      <div className="add-review-container">
        <h3>Submit Your Review</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Write your review here..."
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            required
          />
          <div className="rating-selector">
            <label>Rating: </label>
            <select value={rating} onChange={(e) => setRating(e.target.value)}>
              <option value={5}>5★</option>
              <option value={4}>4★</option>
              <option value={3}>3★</option>
              <option value={2}>2★</option>
              <option value={1}>1★</option>
            </select>
          </div>
          <button type="submit" className="submit-review-btn">Submit Review</button>
        </form>
      </div>
    </div>
  );
}

export default Reviews;

