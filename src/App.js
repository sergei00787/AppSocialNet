import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';


function App(props) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          {/* <Route path="/profile" component={Profile} />
          <Route path="/dialog" component={Dialogs} /> */}

          <Route path="/profile" render={() => <Profile profileState={props.state.ProfileState} addPost={props.addPost}/>} />
          <Route path="/dialog" render={() => <Dialogs dialogState={props.state.DialogState}/>} />
        </div>

      </div>
    </BrowserRouter>

  );
};

export default App;
