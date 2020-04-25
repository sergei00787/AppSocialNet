import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {setProfile} from './../redux/profileReducer';
import Preloader from '../Preloader/Preloader';
import { withRouter } from 'react-router-dom';
import { profileApi } from './../api/api';


class ProfileContainer extends React.Component
{
  componentDidMount() {
    this.getProfile();
  }

  getProfile = () => {
    let userId = this.props.match.params.userId
    profileApi.getProfile(userId).then(response => this.props.setProfile(response));
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