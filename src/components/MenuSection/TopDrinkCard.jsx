import React from 'react';
import './TopDrinkCard.css';

const TopDrinkCard = ({ image, drinkName, description }) => {
  return (
    <div className="top-drink-card">
      <img src={image} alt={drinkName} className="drink-image" />
      <div className="text-container">
        <h2 className="drink-title">{drinkName}</h2>
        <p className="drink-description">{description}</p>
        <a href="#" className="view-more">View More</a>
      </div>
    </div>
  );
};

export default TopDrinkCard;