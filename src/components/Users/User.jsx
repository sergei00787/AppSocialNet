import React from 'react';
import style from './User.module.css';
import { NavLink } from 'react-router-dom';

const User = (props) => {

  let {user, fetchingFollowerList, follow, unfollow } = props;

  return (
    <div className={style.userselement}>
      <div>
        <NavLink to={"profile/" + user.id}>
          <img className={style.smallAva}
            src={user.photos.small != null ? user.photos.small : "https://social-network.samuraijs.com/activecontent/images/users/7049/user-small.jpg?v=1"}
            alt="" />
        </NavLink>
        <img src={user.photos.large} alt="" />
        {user.followed
          ? <button onClick={() => unfollow(user.id)}
            disabled={fetchingFollowerList.some(id => id === user.id)} >Unfollow</button>
          : <button onClick={() => follow(user.id)}
            disabled={fetchingFollowerList.some(id => id === user.id)} >Follow</button>}
      </div>
      <div>
        <div>Name: {user.name}</div>
        <div>STATUS: {user.status}</div>
        <div>{user.uniqueUrlName}</div>
      </div>
    </div>
  )
}

export default User;