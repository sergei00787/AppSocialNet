import React from 'react';
import cssNavbar from './Navbar.module.css'
import { NavLink } from 'react-router-dom';


const Navbar = (props) => {

  const ArrNav = [
    { id: 1, name: "Profile", path: "/profile" },
    { id: 2, name: "Messages", path: "/dialog" },
    { id: 3, name: "News", path: "/news" },
    { id: 4, name: "Music", path: "/music" },
    { id: 5, name: "Settings", path: "/settings" }
  ]

  const listNav = ArrNav.map((navItem) => {
    return (
      <div className={cssNavbar.item}>
        <NavLink to={navItem.path} activeClassName={cssNavbar.activeLink} > {navItem.name} </NavLink>
      </div>)
  });

  return (
    <nav className={cssNavbar.nav}>
      {listNav}



      {/* <div className={cssNavbar.item}>
        <NavLink to="/profile" activeClassName={cssNavbar.activeLink} >Profile</NavLink>
      </div>
      <div className={cssNavbar.item}>
        <NavLink to="/dialog" activeClassName={cssNavbar.activeLink} >Messages</NavLink>
      </div>
      <div className={cssNavbar.item}><a>News</a></div>
      <div className={cssNavbar.item}><a>Music</a></div>
      <div className={cssNavbar.item}><a>Settings</a></div> */}
    </nav>
  )
}

export default Navbar;