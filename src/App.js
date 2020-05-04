import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter, Redirect } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/Preloader/Preloader';
import { compose } from 'redux';
import { connect } from 'react-redux';


class App extends React.Component {

  componentDidMount () {
    this.props.initializeApp();
  }

  render () {
    if (this.props.initialized === false) return <div><Preloader /></div> 
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Redirect from="/" to="/profile" />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialog" render={() => <DialogsContainer/>} />
          <Route path="/users" render={()=><UsersContainer />} />
          <Route path="/login" render={()=><LoginContainer />} />
        </div>  
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return { initialized: state.appState.initialized }
}

export default compose(connect(mapStateToProps,{initializeApp}), withRouter) (App) ;
