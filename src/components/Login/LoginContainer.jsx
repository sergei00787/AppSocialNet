import React from 'react';
import LoginReduxForm from './LoginForm';
import { connect } from 'react-redux';
import {loginTC} from './../../redux/authReducer'



let LoginContainer = (props) => {

  let login= (values) => {
    props.login(values.email, values.password, values.remembeMe);
    console.log(values);
  }

  return <div>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={login} />
  </div>
}

const mapStateToProps = (state) => {
  return {
    userId: state.Auth.userId
  }
}

LoginContainer = connect(mapStateToProps, { login: loginTC })(LoginContainer)

export default LoginContainer;