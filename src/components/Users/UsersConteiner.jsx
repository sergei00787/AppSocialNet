import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setUsersTotalCount, setPageCount, setCurrentPage, toggleIsFetching } from '../redux/usersReducer';
import * as axios from 'axios';
import Users from './Users'
import Preloader from './../Preloader/Preloader';


class UsersConteiner extends React.Component {
  /*constructor(props) {
    super(props);
  }*/

  getUsers = () => {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersInPageCount}&page=${this.props.currentPage}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      })
  }

  getUsersTotalCount = () => {
    this.props.toggleIsFetching(true);
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.toggleIsFetching(false);
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
      <>
      {this.props.isFetching ? <Preloader /> : null}
        <Users onPageChange={this.onPageChange}
          currentPage={this.props.currentPage}
          pageCount={this.props.pageCount}
          usersTotalCount={this.props.usersTotalCount}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>

    )
  }
}


let mapStateToProps = (state) => {
  return {
    users: state.UsersState.users,
    usersTotalCount: state.UsersState.usersTotalCount,
    pageCount: state.UsersState.pageCount,
    currentPage: state.UsersState.currentPage,
    usersInPageCount: state.UsersState.usersInPageCount,
    isFetching: state.UsersState.isFetching
  }
}


let objDispatch = { follow, unfollow, setUsers, setUsersTotalCount, setPageCount, setCurrentPage, toggleIsFetching }

export default connect(mapStateToProps, objDispatch)(UsersConteiner);