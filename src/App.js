import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';


function App(props) {

  return (

    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile" render={() => <Profile/>} />
        <Route path="/dialog" render={() => <DialogsConteiner/>} />
      </div>

    </div>


  );
};

export default App;
