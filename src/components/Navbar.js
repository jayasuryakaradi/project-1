import React from 'react'
import '../components/Navbar.css'
import brand_logo from '../images/brand_logo.png'


const Navbar = () => {
  return (
    <div>
      <nav className="container-one one-nav">
        <div className="logo">
            <img src={brand_logo} alt="brand_logo" />
        </div>
        <ul>
              <li href="/">MENU</li>
              <li href="/">LOCATION</li>
              <li href="/">ABOUT</li>
              <li href="/">CONTACT</li>
            </ul>
            <button className="login-btn">Login</button>
      </nav>
    </div>
  )
}

export default Navbar
