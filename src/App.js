import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import UsersConteiner from './components/Users/UsersConteiner';
import ProfileConteiner from './components/Profile/ProfileConteiner';


let App = (props) => {

  return (

    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile/:userId?" render={() => <ProfileConteiner/>} />
        <Route path="/dialog" render={() => <DialogsConteiner/>} />
        <Route path="/users" render={()=><UsersConteiner />} />
      </div>

    </div>


  );
};

export default App;
