import React from 'react';
import LoginReduxForm from './LoginForm';
import { connect } from 'react-redux';
import {loginTC} from './../../redux/authReducer'
import { Redirect } from 'react-router-dom';

import {getUserId, getIsAuth} from './../../redux/authSelectors';


let LoginContainer = (props) => {

  let {login, userId, isAuth} = props;

  let loginHandler = (values) => {
    login(values.email, values.password, values.rememberMe);
  }

  if (isAuth) {
    return <Redirect to={'/profile/' + userId} />
  }

  return <div>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={loginHandler} />
  </div>
}

const mapStateToProps = (state) => {
  return {
    userId: getUserId(state),
    isAuth: getIsAuth(state)
  }
}

LoginContainer = connect(mapStateToProps, { login: loginTC })(LoginContainer)

export default LoginContainer;