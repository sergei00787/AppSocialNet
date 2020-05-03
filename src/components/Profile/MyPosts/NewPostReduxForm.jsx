import React from 'react';
import {reduxForm, Field} from 'redux-form';

const NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name='newPost' component='textarea' type='text' placeholder='Добавьте новый пост' />
      <button>Отправить</button>
    </form>
  )
    
}

export default reduxForm({form:'NewPostForm'})(NewPostForm)