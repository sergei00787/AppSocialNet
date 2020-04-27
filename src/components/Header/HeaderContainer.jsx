import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authMeTC } from './../redux/authReducer'

class HeaderContainer extends React.Component {

  componentDidMount() {
    if (this.props.login === null) {
      this.props.authMe();
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

export default connect(mapStateToProps, { authMe: authMeTC })(HeaderContainer);