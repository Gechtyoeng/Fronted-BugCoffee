import React from 'react'
import Navigation from './components/Navigation'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home/home'
import Menu from './pages/menu/menu'
import Contact from './pages/contact/contact'
import Review from './pages/review/review'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/review' element={<Review/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <menu/>
      <Footer/>
    </div>
  )
}

export default App

