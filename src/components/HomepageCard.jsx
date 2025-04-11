import React from 'react'
import './homepagecard.css'
function HomepageCard({title, icon, text}) {
  return (
    <div className="homepage-card">
      <p className='title'>{title}</p>
      <img src={icon} alt={title} className="icon" />
      <p className='text'>{text}</p>
      </div>
  )
}

export default HomepageCard
