import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logoutTC } from './../../redux/authReducer';
import { authMeTC } from './../../redux/appReducer';

class HeaderContainer extends React.Component {

  componentDidMount() {
    if (!this.props.isAuth) {
      this.props.authMe();
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
    userId: state.Auth.userId,
    email: state.Auth.email,
    login: state.Auth.login,
    isAuthFetching: state.Auth.isAuthFetching,
    isAuth: state.Auth.isAuth
  })

}

export default connect(mapStateToProps, { authMe: authMeTC, logout: logoutTC })(HeaderContainer);