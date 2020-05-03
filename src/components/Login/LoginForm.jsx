import React from 'react';
import { Field, reduxForm } from 'redux-form';


const LoginForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="email" type="text" component="input" placeholder="email"/>
      </div>
      <div>
        <Field name="password" type="text" component="input" placeholder="password"/>
      </div>
      <div>
        <label htmlFor="">Remember me</label>
        <Field name="rememberMe" type="checkbox" component="input" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>  
    </form>
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm);

export default LoginReduxForm;