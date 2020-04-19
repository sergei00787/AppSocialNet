import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';

let Users = (props) => {

  if (props.users.length === 0) {

    axios.get("https://social-network.samuraijs.com/api/1.0/users?count=100&page=2")
    .then(response => {
      props.setUsers(response.data.items);
    })
    /*
    props.setUsers([
      {
        id: 1,
        imgUrl: 'http://image.blingee.com/images19/content/output/000/000/000/7f3/833801649_1387051.gif',
        followed: false,
        firstName: "Sergey",
        lastName: "Buymov",
        location: { city: "myski", address: 'vahrushev street' }
      },
      { id: 2, 
        imgUrl: 'https://dw1qzo2j34zu4.cloudfront.net/d9f/3ee4b/248b/4baa/bf24/7b7aa525786e/animated/203528.gif', 
        followed: true, 
        firstName: "Alesya", 
        lastName: "Buymova", 
        location: { city: "myski", address: 'vahrushev street' } 
      },
      { id: 3, 
        imgUrl: 'https://forum.hunterclub.ru/data/avatars/o/1/1106.jpg?1552044751', 
        followed: false, 
        firstName: "Shusha", 
        lastName: "Buymova", 
        location: { city: "myski", address: 'vahrushev street' } 
      }
    ])*/
  }


  return (
    <div className="userswrap">
      {
        props.users.map(u =>           
            <div key={u.id} className={style.userselement}>
              <div>
                <img className={style.smallAva} src={u.photos.small != null ? u.photos.small : "https://social-network.samuraijs.com/activecontent/images/users/7049/user-small.jpg?v=1"} alt="" />
                <img src={u.photos.large} alt="" />
                {u.followed  
                ? <button onClick={ () => {props.unfollow(u.id) } }>Unfollow</button>
                : <button onClick={ () => {props.follow(u.id) } }>Follow</button>}
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