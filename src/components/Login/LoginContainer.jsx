import React from 'react';
import LoginReduxForm from './LoginForm';
import { connect } from 'react-redux';
import {loginTC} from './../../redux/authReducer'
import { Redirect } from 'react-router-dom';



let LoginContainer = (props) => {

  let login= (values) => {
    props.login(values.email, values.password, values.remembeMe);
    console.log(values);
  }

  if (props.isAuth) {
    return <Redirect to={'/profile/' + props.userId} />
  }

  return <div>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={login} />
  </div>
}

const mapStateToProps = (state) => {
  return {
    userId: state.Auth.userId,
    isAuth: state.Auth.isAuth
  }
}

LoginContainer = connect(mapStateToProps, { login: loginTC })(LoginContainer)

export default LoginContainer;