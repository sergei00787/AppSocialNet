import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {setProfile, getProfileTC} from '../../redux/profileReducer';
import Preloader from '../Preloader/Preloader';
import { withRouter, Redirect } from 'react-router-dom';



class ProfileContainer extends React.Component
{
  componentDidMount() {
    this.props.getProfile( this.props.match.params.userId );
  }

  render () {
    
    // if (!this.props.profile) {
    //   return <Preloader />
    // }    

    if (!this.props.isAuth) { return <Redirect to='/login' />}

      return (
        <Profile {...this.props.profile} />
      )
  }  
  
}

let mapStateToProps = (state) => {
  return { profile: state.ProfileState.profile,
           isAuth: state.Auth.isAuth }
  
}

let WithRouterProfileComponent = withRouter(ProfileContainer)

export default connect( mapStateToProps, { setProfile, getProfile: getProfileTC } )(WithRouterProfileComponent); 