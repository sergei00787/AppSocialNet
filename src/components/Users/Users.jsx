import React from 'react';
import style from './Users.module.css';
import { NavLink } from 'react-router-dom';
import { usersApi } from './../api/api';

const Users = (props) => {
  let pages = [];
  for (let i = 1; i <= props.pageCount; i++) {
    pages.push(i);
  }

  let handlerFollow = (id) => {
    props.fetchingFollower(true, id);
    usersApi.follow(id)
      .then(response => { if (response.resultCode === 0) {
        props.follow(id); 
        props.fetchingFollower(false, id);
        } 
      });
      
  }

  let handlerUnfollow = (id) => {
    props.fetchingFollower(true, id);
    usersApi.unfollow(id)
      .then(response => { if (response.resultCode === 0) {
        props.unfollow(id); 
        props.fetchingFollower(false, id);
        } 
      });
      
  }

  return (
    <div className="userswrap">
      <div>{props.usersTotalCount === 0 ? null : `Всего пользователей: ${props.usersTotalCount}`}</div>
      <div>{props.pageCount === 0 ? null : `Всего страниц: ${props.pageCount}`}</div>

      <div className={style.pageNumConteiner}>
        {
          pages.map(p => {
            return <span key={p} className={`${style.pageItem} ${props.currentPage === p ? style.currentPage : ""} `}
              onClick={(e) => { props.onPageChange(p) }}>{p}</span>
          })
        }
      </div>

      {
        props.users.map(u =>
          <div key={u.id} className={style.userselement}>
            <div>
              <NavLink to={"profile/" + u.id}>
                <img className={style.smallAva}
                  src={u.photos.small != null ? u.photos.small : "https://social-network.samuraijs.com/activecontent/images/users/7049/user-small.jpg?v=1"}
                  alt="" />
              </NavLink>
              <img src={u.photos.large} alt="" />
              {u.followed
                ? <button onClick = {() => handlerUnfollow(u.id) } 
                          disabled = {props.fetchingFollowerList.some(id => id === u.id)} >Unfollow</button>
                : <button onClick={() => handlerFollow(u.id) } 
                          disabled = {props.fetchingFollowerList.some(id => id === u.id)} >Follow</button>}
            </div>
            <div>
              <div>Name: {u.name}</div>
              <div>STATUS: {u.status}</div>
              <div>{u.uniqueUrlName}</div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Users;