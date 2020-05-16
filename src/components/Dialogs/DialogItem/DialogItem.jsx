import React from 'react';
import style from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let {id, DialogName} = props;

  let path = "/dialog/" + id;
  return (
    <div className={style.dialog}>
      <NavLink to={path}>{DialogName}</NavLink>
    </div>
  )
}

export default DialogItem;