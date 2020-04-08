import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';


function App(props) {

  return (

    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile" render={() => <Profile profileState={props.state.ProfileState} dispatch={props.dispatch} />} />
        <Route path="/dialog" render={() => <Dialogs dialogState={props.state.DialogState} />} />
      </div>

    </div>


  );
};

export default App;
