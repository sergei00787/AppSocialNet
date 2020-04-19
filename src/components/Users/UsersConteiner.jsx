import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from '../redux/usersReducer';
import Users from './Users'

let mapStateToProps = (state) => {
  return {
    users: state.UsersState.users
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => { dispatch(followAC(userId)) },
    unfollow: (userId) => { dispatch(unfollowAC(userId)) },
    setUsers: (users) => { dispatch(setUsersAC(users)) }
  }
}

const UsersConteiner = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersConteiner;