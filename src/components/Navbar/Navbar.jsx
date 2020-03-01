import React from 'react';
import cssNavbar from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={cssNavbar.nav}>
    <div className={`${cssNavbar.item} ${cssNavbar.active}`}><a>Profile</a></div>
    <div className={cssNavbar.item}><a>Messages</a></div>
    <div className={cssNavbar.item}><a>News</a></div>
    <div className={cssNavbar.item}><a>Music</a></div>
    <div className={cssNavbar.item}><a>Settings</a></div>
  </nav>
  )
}

export default Navbar;