import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthData, toggleIsAuthFetching } from './../redux/authReducer'

class HeaderContainer extends React.Component {

  componentDidMount() {
    if (this.props.login === null) {
      this.props.toggleIsAuthFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
        .then(response => {
          this.props.toggleIsAuthFetching(false);
          let { id, email, login } = response.data.data;
          this.props.setAuthData(id, email, login);
        })
    }

  }

  render() {
    return (
      <Header login={this.props.login} email={this.props.email} userId={this.props.userId} isAuthFetching={this.props.isAuthFetching} />
    )
  }
}

let mapStateToProps = (state) => {
  return ({
    userId: state.Auth.userId,
    email: state.Auth.email,
    login: state.Auth.login,
    isAuthFetching: state.Auth.isAuthFetching
  })

}

export default connect(mapStateToProps, { setAuthData, toggleIsAuthFetching })(HeaderContainer);