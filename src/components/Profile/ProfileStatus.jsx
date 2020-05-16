import React from 'react';
import s from './Profile.module.css'
import { useState, useEffect } from 'react';

const ProfileStatus = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => setStatus(props.status) , [props.status]);

  const enabledEditMode = () => {
    setEditMode(true);
  }

  const disabledEditMode = () => {
    setEditMode(false);
    props.setProfileStatus(status);
  }

  const changeStatus = (e) => {
    setStatus(e.target.value);
  }

  return (
    <>
    {(!editMode) 
      ? <div className={s.boxstatus}  onDoubleClick= {enabledEditMode} >{(!status)? "Введите статус" : status}</div>
      : <div><input className={s.boxstatus}
                    placeholder="Введите статус" 
                    autoFocus={ true } 
                    value={ status } 
                    onBlur={ disabledEditMode }
                    onChange={ changeStatus } /></div>}
    </>)
}

export default ProfileStatus;