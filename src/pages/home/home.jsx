import React from 'react'
import HomepageCard from '../../components/HomepageCard'
import BackgroundCard from '../../components/BackgroundCard'
import car from '../../assets/car-front-fill.svg'
import cup from '../../assets/cup-straw.svg'
import house from '../../assets/house-heart.svg'
import union from '../../assets/Union.svg'
import BG_IMAGE from '../../data/hp_bg'
import readBook from '../../assets/readBook.png'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import tele from '../../assets/tele.svg'
import tiktok from '../../assets/tiktok.svg'
import './home.css'

const home = () => {
  return (
    <>
      <BackgroundCard images={BG_IMAGE}/>
      <div  className='big-container'>
        <h1>WHY CHOOSE US ?</h1>
        <div className='card-container'>
        <HomepageCard title={"A Cozy Space"} icon={house} text={"Whether you're here to work, relax, or connect with friends, our café offers a warm and welcoming atmosphere"}/>
        <HomepageCard title={"Unique Flavors"} icon={cup} text={"From classic favorites to our signature blends, we love experimenting with flavors to bring you something special"}/>
        <HomepageCard title={"Daily Escape"} icon={car} text={"Whether you're here to work, relax, or connect with friends, our café offers a warm and welcoming atmosphere."}/>
        <HomepageCard title={"Sustainably Sourced"} icon={union} text={"Whether you're here to work, relax, or connect with friends, our café offers a warm and welcoming atmosphere."}/>
        </div>
      </div>
      <div className='aboutUs'>
        <div className='aboutUs-text' id='about-us'>
          <h1>About Us</h1>
          <p className='home-description'>At Bugs Coffee, we believe that coffee is more than just a drink—it’s an experience. 
            Founded with a passion for quality, sustainability, and community, our café is a place where people come together over a great cup of coffee.</p>
        </div>
        <div>
          <img className='readbook' src={readBook} alt="" />
          <div className='social-icon'>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={tele} alt="" />
            <img src={tiktok} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default home
