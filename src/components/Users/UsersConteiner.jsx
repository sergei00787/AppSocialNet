import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setUsersTotalCountAC, setPageCountAC, setCurrentPageAC } from '../redux/usersReducer';
import * as axios from 'axios';
import Users from './Users'


class UsersConteiner extends React.Component {
  constructor(props) {
    super(props);
  }

  getUsers = () => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersInPageCount}&page=${this.props.currentPage}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      })
  }

  getUsersTotalCount = () => {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsersTotalCount(response.data.totalCount);
        this.getPageCount(response.data.totalCount, this.props.usersInPageCount);
      })
  }

  getPageCount = (usersTotalCount, usersInPageCount) => {
    let pageCount = Math.ceil(usersTotalCount / usersInPageCount);
    this.props.setPageCount(pageCount);
  }

  onPageChange = (pageNum) => {
    this.props.setCurrentPage(pageNum);
    this.getUsers();
  }

  componentDidMount() {
    this.getUsersTotalCount();
    this.getUsers();
  }



  render() {

    return (
      <Users onPageChange={this.onPageChange}
        currentPage={this.props.currentPage} 
        pageCount={this.props.pageCount}
        usersTotalCount={this.props.usersTotalCount}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}               
      />
    )
  }
}


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
    setUsersTotalCount: (usersTotalCount) => { dispatch(setUsersTotalCountAC(usersTotalCount)) },
    setPageCount: (pageCount) => { dispatch(setPageCountAC(pageCount)) },
    setCurrentPage: (pageNum) => { dispatch(setCurrentPageAC(pageNum)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersConteiner);