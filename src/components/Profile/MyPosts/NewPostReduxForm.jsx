import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, maxLengthCreator} from './../../../utils/validators/validators';
import { TextareaControl } from './../../FormColtrols/FormControl';


const maxlength30 = maxLengthCreator(30);

const NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name='newPost' 
             component={ TextareaControl }
             type='text' 
             placeholder='Добавьте новый пост' 
             validate={ [required, maxlength30] } />
      <button>Отправить</button>
    </form>
  )
    
}

export default reduxForm({form:'NewPostForm'})(NewPostForm)