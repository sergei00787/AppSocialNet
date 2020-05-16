import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logoutTC } from './../../redux/authReducer';
import { authMeTC } from './../../redux/appReducer';
import {getUserId, getEmail, getLogin, getIsAuthFetching, getIsAuth } from '../../redux/authSelectors';

class HeaderContainer extends React.Component {  

  componentDidMount() {
    let {isAuth, authMe} = this.props;

    if (!isAuth) {
      authMe();
    }
  }

  render() {
    return (
      <Header {...this.props} />
    )
  }
}

let mapStateToProps = (state) => {
  return ({
    userId: getUserId(state),
    email: getEmail(state),
    login: getLogin(state),
    isAuthFetching: getIsAuthFetching(state),
    isAuth: getIsAuth(state)
  })

}

export default connect(mapStateToProps, { authMe: authMeTC, logout: logoutTC })(HeaderContainer);