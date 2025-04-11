"use client";
import { useState } from "react";
import "./review.css";
import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.jpg";
import profile3 from "../../assets/profile3.jpg";
import profile4 from "../../assets/profile4.jpg";
import WriteRating from "./writeRating.jsx";

const ReviewSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      name: "Jollie",
      rating: 5,
      comment: "Absolutely delicious! The flavor is rich and refreshing.",
      image: profile1,
    },
    {
      name: "Coco",
      rating: 4,
      comment: "Perfectly balanced sweetness and taste.",
      image: profile2,
    },
    {
      name: "Bunny",
      rating: 5,
      comment: "This drink is amazing! Not too sweet, just right. Highly recommend!",
      image: profile3,
    },
    {
      name: "Sunny",
      rating: 5,
      comment: "The flavor is unique and so satisfying.",
      image: profile4,
    },
    {
      name: "Luna",
      rating: 4,
      comment: "Great taste, but a bit too sweet for me.",
      image: profile1,
    },
    {
      name: "Milo",
      rating: 5,
      comment: "Perfectly refreshing and satisfying!",
      image: profile2,
    },
    {
      name: "Bella",
      rating: 4,
      comment: "Good, but could use a bit more flavor.",
      image: profile3,
    },
    {
      name: "Max",
      rating: 5,
      comment: "Absolutely loved it! Highly recommend.",
      image: profile4,
    },
  ]);

  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? "star filled" : "star"}>
          ★
        </span>
      );
    }
    return stars;
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitReview = (reviewData) => {
    const newReview = {
      name: "You",
      rating: reviewData.rating,
      comment: reviewData.feedback,
      image: reviewData.image || profile1,
    };

    setReviews([...reviews, newReview]);
  };

  return (
    <div className="review-container">
      <header className="review-title">Review</header>
      <p className="review-subtitle">Let us know what you think.</p>

      {/* Display reviews in 2 rows */}
      <div className="review-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="profile-image">
              <img src={review.image || profile1} alt={review.name} />
            </div>
            <h3 className="reviewer-name">{review.name}</h3>
            <div className="star-rating">{renderStars(review.rating)}</div>
            <p className="review-text">{review.comment}</p>
          </div>
        ))}
      </div>

      <button className="review-button" onClick={openModal}>
        Review Here!
      </button>

      <WriteRating isOpen={isModalOpen} onClose={closeModal} onSubmit={handleSubmitReview} />
    </div>
  );
};

export default ReviewSection;