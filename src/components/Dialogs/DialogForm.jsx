import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required, maxLengthCreator} from './../../utils/validators/validators';
import { TextareaControl } from './../FormColtrols/FormControl';

const maxlength30 = maxLengthCreator(30);

let DialogForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={ TextareaControl } 
             name="message" 
             placeholder="Введите сообщение" 
             type="text" 
             validate = { [required, maxlength30] }/>
      <button type="submit">Отправить</button>
    </form>
  )
}

let DialogFormRedux = reduxForm({form: 'addMessageForm'})(DialogForm);

export default DialogFormRedux;