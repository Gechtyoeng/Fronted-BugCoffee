"use client"

import { useState } from "react"
import "./writeRating.css"

const writeRating = ({ isOpen, onClose, onSubmit }) => {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [selectedImage, setSelectedImage] = useState(null)

  if (!isOpen) return null

  const handleStarClick = (starIndex) => {
    setRating(starIndex)
  }

  const handleStarHover = (starIndex) => {
    setHoveredRating(starIndex)
  }

  const handleStarLeave = () => {
    setHoveredRating(0)
  }

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const imageUrl = URL.createObjectURL(file)
      setSelectedImage(imageUrl)
    }
  }

  const handleSubmit = () => {
    onSubmit({ rating, feedback, image: selectedImage })
    setRating(0)
    setFeedback("")
    setSelectedImage(null)
    onClose()
  }

  return (
    <div className="modal-overlay">
      <div className="rating-modal">
        <div className="modal-header">
          <h2>Rating</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>

        <p className="modal-subtitle">Help us improve our drinks to best suit your preference by rating us here!</p>

        <div className="star-rating-container">
          {[1, 2, 3, 4, 5].map((starIndex) => (
            <div
              key={starIndex}
              className={`star-outline ${(hoveredRating || rating) >= starIndex ? "star-filled" : ""}`}
              onClick={() => handleStarClick(starIndex)}
              onMouseEnter={() => handleStarHover(starIndex)}
              onMouseLeave={handleStarLeave}
            >
              ★
            </div>
          ))}
        </div>

        <div className="feedback-section">
          <p className="feedback-label">Can you tell us more?</p>
          <textarea
            className="feedback-input"
            placeholder="Add feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </div>

        <div className="image-upload-container">
          <label htmlFor="image-upload" className="image-upload-button">
            <span>Browse image</span>
            <div className="image-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="#000" strokeWidth="2" />
                <path d="M3 16L7 12L10 15L15 10L21 16" stroke="#000" strokeWidth="2" />
                <circle cx="16" cy="8" r="2" fill="#000" />
              </svg>
            </div>
          </label>
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          {selectedImage && (
            <div className="selected-image-preview">
              <img src={selectedImage || "/placeholder.svg"} alt="Selected" />
            </div>
          )}
        </div>

        <div className="modal-buttons">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default writeRating;