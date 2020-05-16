import React from 'react';
//import style from './Users.module.css';
import User from './User'
import Paginator from './Paginator';

const Users = (props) => {
  let {usersTotalCount, pageCount, currentPage, onPageChange, fetchingFollowerList, follow, unfollow   } = props;
  
  

  return (
    <div className="userswrap">
      <Paginator usersTotalCount={usersTotalCount} pageCount={pageCount} currentPage={currentPage} onPageChange={onPageChange}/>
      
      {
        props.users.map(u =>
          <User key={u.id} user={u} fetchingFollowerList={fetchingFollowerList} follow={follow} unfollow={unfollow} />
        )
      }
    </div>
  )
}

export default Users;