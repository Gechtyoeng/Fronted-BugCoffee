import React from 'react'
import Navigation from './components/Navigation'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home/home'
import Menu from './pages/menu/menu'
import Contact from './pages/contact/contact'
import Review from './pages/review/review'
const App = () => {
  return (
    <div>
      <h1>hh</h1>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='./Menu' element={<Menu/>} />
        <Route path='./Review' element={<Review/>} />
        <Route path='./Contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App

