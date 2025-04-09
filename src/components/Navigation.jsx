import React, { useState } from 'react'

const Navigation = () => {
  const [menu,setMenu] = useState('home');

  return (
    <div>
       <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>Review</li>
        <li>Contact</li>
       </ul>
    </div>
  )
}

export default Navigation
