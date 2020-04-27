import React from 'react';
import cssHeader from './Header.module.css';
import Preloader from '../Preloader/Preloader';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={cssHeader.header}>
      
      { props.isAuthFetching 
      ? <div><Preloader /></div> 
      : <img src="https://banner2.cleanpng.com/20180422/aqw/kisspng-logo-lapel-pin-mexico-3d-design-affixed-5adcdf6be17623.1829017415244245559235.jpg" alt="Header" />
      }
      <div className={cssHeader.loginBlock}>
        { props.isAuth  ? <a>{props.login}</a> : <NavLink to={'/login'}>LogIn</NavLink> }
      </div>

    </header>
  )
}

export default Header;