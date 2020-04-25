import React from 'react';
import * as axios from 'axios';
import {connect} from 'react-redux';
import Profile from './Profile';
import {setProfile} from './../redux/profileReducer';
import Preloader from '../Preloader/Preloader';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component
{
  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    let userId = this.props.match.params.userId
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setProfile(response.data);
      })
  }

  render () {
    
    // if (!this.props.profile) {
    //   return <Preloader />
    // }    

      return (
        <Profile {...this.props.profile} />
      )
  }  
  
}

let mapStateToProps = (state) => {
  return { profile: state.ProfileState.profile }
  
}

let WithRouterProfileComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{setProfile})(WithRouterProfileComponent); 