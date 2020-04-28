import React from 'react';
import { connect } from 'react-redux';
import { setUsers, setCurrentPage, fetchingFollower, getUsersTC, getUsersTotalCountTC, followTC, unfollowTC } from '../../redux/usersReducer';
import Users from './Users'
import Preloader from '../Preloader/Preloader';

class UsersConteiner extends React.Component {

  onPageChange = (pageNum) => {
    this.props.setCurrentPage(pageNum);
    this.props.getUsers(this.props.usersInPageCount, this.props.currentPage);
  }

  componentDidMount() {
    this.props.getUsersTotalCount(this.props.usersInPageCount);
    this.props.getUsers(this.props.usersInPageCount, this.props.currentPage);
  }

  render() {

    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users onPageChange={this.onPageChange}
          {...this.props}
          /*
          currentPage={this.props.currentPage}
          pageCount={this.props.pageCount}
          usersTotalCount={this.props.usersTotalCount}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          fetchingFollower = {this.props.fetchingFollower}
          fetchingFollowerList = {this.props.fetchingFollowerList}  
          */       
        />
      </>

    )
  }
}


let mapStateToProps = (state) => {
  return {...state.UsersState}
    /*
    users: state.UsersState.users,
    usersTotalCount: state.UsersState.usersTotalCount,
    pageCount: state.UsersState.pageCount,
    currentPage: state.UsersState.currentPage,
    usersInPageCount: state.UsersState.usersInPageCount,
    isFetching: state.UsersState.isFetching,
    fetchingFollowerList: state.UsersState.fetchingFollowerList
    
  }*/
}


let objDispatch = { setUsers, 
                    setCurrentPage, 
                    fetchingFollower, 
                    getUsers: getUsersTC,
                    getUsersTotalCount: getUsersTotalCountTC,
                    follow: followTC,
                    unfollow: unfollowTC
                   }

export default connect(mapStateToProps, objDispatch)(UsersConteiner);