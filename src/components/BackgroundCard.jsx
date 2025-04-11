import React from 'react'
import ArrowLeft from '../assets/arrow-left-circle.svg'
import ArrowRight from '../assets/arrow-right-circle.svg'
import { useState } from "react";
import { motion } from "framer-motion"; // For smooth animation


const BackgroundCard = ({images}) => {
  const [img, setImg] = useState(0)

  function handleLeft() {
    setImg(img === 0 ? images.length - 1 : img - 1)
  }

  function handleRight(){
   setImg(img === images.length - 1 ? 0 : img + 1)
  }

  return (
    <>
    <div className='background-big-container'>
      <div className='background-container'>
        <img src={ArrowLeft} alt="Left Arrow" className="arrow" onClick={handleLeft}/>
        <motion.img
          key={img} // Ensures re-render for animation
          src={images[img].src}
          alt={images[img].alt}
          className="background-img"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
        />
        <img src={ArrowRight} alt={ArrowRight} className="arrow" onClick={handleRight}/>
      </div>
      <div className='dot-container'>
        <div className={'dot' + (img === 0 ? ' active' : ' inactive')} onClick={() => {setImg(0)}}></div>
        <div className={'dot' + (img === 1 ? ' active' : ' inactive')} onClick={() => {setImg(1)}}></div>
        <div className={'dot' + (img === 2 ? ' active' : ' inactive')} onClick={() => {setImg(2)}}></div>
        <div className={'dot' + (img === 3 ? ' active' : ' inactive')} onClick={() => {setImg(3)}}></div>
      </div>
    </div>
    </>
  )
}

export default BackgroundCard
