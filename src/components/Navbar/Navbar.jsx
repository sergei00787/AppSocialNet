import React from 'react';
import cssNavbar from './Navbar.module.css'
import { NavLink } from 'react-router-dom';


const Navbar = (props) => {

  const ArrNav = [
    { id: 1, name: "Profile", path: "/profile" },
    { id: 2, name: "Messages", path: "/dialog" },
    { id: 3, name: "News", path: "/news" },
    { id: 4, name: "Music", path: "/music" },
    { id: 5, name: "Settings", path: "/settings" },
    { id: 6, name: "Find Users", path: "/users" }
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
    </nav>
  )
}

export default Navbar;