import React from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

let mapStateAuthToProps = (state) => {
  return {
    isAuth: state.Auth.isAuth
  }
}

const withAuthRedirectHoc = (WrappedComponent) => {

  class Component extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to='/login' />;
      return <WrappedComponent {...this.props}/>;
    }
  }

  let AuthComponent = connect(mapStateAuthToProps)(Component)

  return AuthComponent;

}

export default withAuthRedirectHoc;

