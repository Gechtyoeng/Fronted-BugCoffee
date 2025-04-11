
import './navigation.css'
import { NavLink } from 'react-router-dom';
import logo from '../assets/coffee-logo.png'
const Navigation = () => {

  return (
    <div>
      <div className='navbar'>
        <img src={logo} alt="logo"/>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
          <li><NavLink to="/menu" className={({ isActive }) => isActive ? "active-link" : ""}>Menu</NavLink></li>
          <li><NavLink to="/review" className={({ isActive }) => isActive ? "active-link" : ""}>Review</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink></li>
        </ul>
       </div>
    </div>
  )
}

export default Navigation
