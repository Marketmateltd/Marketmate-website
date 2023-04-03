import React, {useState} from 'react';
import './navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi';
import LOGO from '../images/LOGO1.png'

function Navbar()  {
  const [showMediaIcons, setShoeMediaIcons]= useState(false);
  return (
    <nav className='main-nav'>
      <div className='logo'>
      <a href=''> <img src={LOGO} alt='MM-logo'/>
      </a>
      </div>
      <div className={showMediaIcons ? 'menu-link mobile-menu-link':'menu-link'}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Services</a></li>
          <li><a href="/services">About</a></li>
          <li><a href="/contact">Blog</a></li>
        </ul>  
      </div>
      <div className='signup-link'>
      <h2 className= 'signup-link-desktop'><a href=''>Signup</a></h2>
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
