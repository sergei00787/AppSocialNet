import React from 'react';
import { Field, reduxForm } from 'redux-form';

let DialogForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component="textarea" name="message" placeholder="Введите сообщение" type="text" />
      <button type="submit">Отправить</button>
    </form>
  )
}

let DialogFormRedux = reduxForm({form: 'addMessageForm'})(DialogForm);

export default DialogFormRedux;