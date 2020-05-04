import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { InputControl } from '../FormColtrols/FormControl';
import {required, maxLengthCreator} from './../../utils/validators/validators';

const maxlength100 = maxLengthCreator(30);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="email" type="text" component={InputControl} placeholder="email" validate = { [required, maxlength100] }/>
      </div>
      <div>
        <Field name="password" type="password" component={InputControl} placeholder="password" validate = { [required, maxlength100] }/>
      </div>
      <div>
        <label htmlFor="">Remember me</label>
        <Field name="rememberMe" type="checkbox" component={InputControl} />
      </div>
      <div  className="formLoginError">
      { props.error && <strong>{props.error}</strong>}
      </div>
      
      <div>
        <button type="submit">Submit</button>
      </div>  
    </form>
  )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm);

export default LoginReduxForm;