import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import UsersConteiner from './components/Users/UsersConteiner';
import ProfileConteiner from './components/Profile/ProfileConteiner';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';


let App = (props) => {

  return (

    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile/:userId?" render={() => <ProfileConteiner/>} />
        <Route path="/dialog" render={() => <DialogsConteiner/>} />
        <Route path="/users" render={()=><UsersConteiner />} />
        <Route path="/login" render={()=><LoginContainer />} />
      </div>

    </div>


  );
};

export default App;
