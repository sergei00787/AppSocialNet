import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {setProfile, getProfileTC} from './../redux/profileReducer';
import Preloader from '../Preloader/Preloader';
import { withRouter } from 'react-router-dom';



class ProfileContainer extends React.Component
{
  componentDidMount() {
    this.props.getProfile( this.props.match.params.userId );
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

export default connect( mapStateToProps, { setProfile, getProfile: getProfileTC } )(WithRouterProfileComponent); 