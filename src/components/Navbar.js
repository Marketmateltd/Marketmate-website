import React, {useState} from 'react';
import './navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi';


function Navbar()  {
  const [showMediaIcons, setShoeMediaIcons]= useState(false);
  return (
    <nav className='main-nav'>
      <div className='logo'>
          <h2>Market Mate</h2>
      </div>
      <div className={showMediaIcons ? 'menu-link mobile-menu-link':'menu-link'}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>  
      </div>
      <div className='signup-link'>
           <h2 className='signup-link-desktop'>Signup</h2>
           {/* hamburget menu start */}
           <div className='hamburger-menu'>
                <a href='#' onClick={()=>setShoeMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu/>
                </a >
           </div>
      </div>
    </nav>
  );
};

export default Navbar;
