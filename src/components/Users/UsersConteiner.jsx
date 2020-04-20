import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setUsersTotalCountAC, setPageCountAC, setCurrentPageAC } from '../redux/usersReducer';
import Users from './Users'

let mapStateToProps = (state) => {
  return {
    users: state.UsersState.users,
    usersTotalCount: state.UsersState.usersTotalCount,
    pageCount: state.UsersState.pageCount,
    currentPage: state.UsersState.currentPage,
    usersInPageCount: state.UsersState.usersInPageCount
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => { dispatch(followAC(userId)) },
    unfollow: (userId) => { dispatch(unfollowAC(userId)) },
    setUsers: (users) => { dispatch(setUsersAC(users)) },
    setUsersTotalCount: (usersTotalCount) => { dispatch(setUsersTotalCountAC(usersTotalCount))},
    setPageCount: (pageCount) => { dispatch(setPageCountAC(pageCount))},
    setCurrentPage: (pageNum) => { dispatch(setCurrentPageAC(pageNum))}
  }
}

const UsersConteiner = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersConteiner;