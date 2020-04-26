import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setUsersTotalCount, setPageCount, setCurrentPage, toggleIsFetching, fetchingFollower } from '../redux/usersReducer';
import Users from './Users'
import Preloader from './../Preloader/Preloader';
import { usersApi } from './../api/api';

class UsersConteiner extends React.Component {

  getUsers = () => {
    this.props.toggleIsFetching(true);
    usersApi.getUsers(this.props.usersInPageCount, this.props.currentPage)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.items);
      })
  }

  getUsersTotalCount = () => {
    this.props.toggleIsFetching(true);   
    usersApi.getUsersTotalCount().then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsersTotalCount(response.totalCount);
        this.getPageCount(response.totalCount, this.props.usersInPageCount);
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
          fetchingFollower = {this.props.fetchingFollower}
          fetchingFollowerList = {this.props.fetchingFollowerList}         
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
    isFetching: state.UsersState.isFetching,
    fetchingFollowerList: state.UsersState.fetchingFollowerList
  }
}


let objDispatch = { follow, unfollow, setUsers, setUsersTotalCount, setPageCount, setCurrentPage, toggleIsFetching, fetchingFollower }

export default connect(mapStateToProps, objDispatch)(UsersConteiner);