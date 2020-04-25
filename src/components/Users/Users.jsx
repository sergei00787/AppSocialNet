import React from 'react';
import style from './Users.module.css';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const Users = (props) => {
  let pages = [];
  for (let i = 1; i <= props.pageCount; i++) {
    pages.push(i);
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
                ? <button onClick={() => {
                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, 
                                { withCredentials: true,
                                  headers: { "API-KEY": "bcb971f4-bdbf-4eeb-8ecd-aa42107df5c0" } 
                                })
                    .then(response => {
                      if (response.data.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                    })
                }}>Unfollow</button>
                : <button onClick={() => {

                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                    {},
                    {
                      withCredentials: true,
                      headers: { "API-KEY": "bcb971f4-bdbf-4eeb-8ecd-aa42107df5c0" }
                    }
                  )
                    .then(response => {
                      if (response.data.resultCode === 0) {
                        props.follow(u.id);
                      }
                    })
                }}>Follow</button>}
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