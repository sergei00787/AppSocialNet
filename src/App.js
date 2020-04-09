import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';


function App(props) {

  return (

    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile" render={() => <Profile store={props.store} />} />
        <Route path="/dialog" render={() => <DialogsConteiner store={props.store} />} />
      </div>

    </div>


  );
};

export default App;
