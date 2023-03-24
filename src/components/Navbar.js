import React from 'react';
import './navbar.css'

function Navbar()  {
  return (
    <nav className='main-nav'>
      <div className='logo'>
          <h2>Market Mate</h2>
      </div>
      <div className='menu-link'>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>  
      </div>
      <div className='signup-link'>
           <h2>Signup</h2>
      </div>
    </nav>
  );
};

export default Navbar;