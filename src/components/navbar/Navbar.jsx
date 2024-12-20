import React from 'react';
import { Link } from 'react-router-dom';
import './module.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <Link to="/">
        <img 
          style={{ width: '24px', height: '24px' }} 
          src="./nav-image/coffe-icon.png" 
          alt="Coffee Logo" 
        />
        <img 
          style={{ width: '204px', height: '24px' }} 
          src="./nav-image/coffe.png" 
          alt="Coffee Roasters" 
        />
      </Link>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT US</Link></li>
        <li><Link to="/plan">CREATE YOUR PLAN</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
