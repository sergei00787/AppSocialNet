import React from 'react';
import styles from './styleControl.module.css'

const FormControl = (props) => {
  let {meta} = props;
  
  const hasError = meta.touched && meta.error;

  return (
    <div className = {styles.formControl + " " + (hasError ? styles.error : "")}>
      {props.children}
      { hasError && <span>{meta.error}</span> }
    </div>
  )
}

export const InputControl = (props) => {
  let {input, meta, ...otherProps} = props;  
  return <FormControl {...props} > <input {...input} {...otherProps} /> </FormControl> 
}

export const TextareaControl = (props) => {
  let {input, meta, ...otherProps} = props;  
  return <FormControl {...props} > <textarea {...input} {...otherProps} /> </FormControl> 
}