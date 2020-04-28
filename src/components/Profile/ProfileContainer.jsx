import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {setProfile, getProfileTC} from '../../redux/profileReducer';
// import Preloader from '../Preloader/Preloader';
import { withRouter, Redirect } from 'react-router-dom';
import whitRedirectHoc  from './../Hocs/RedirectHoc'


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
  return { profile: state.ProfileState.profile }  
}

let AuthRedirectProfileContainer = whitRedirectHoc(ProfileContainer);

let WithRouterProfileComponent = withRouter(AuthRedirectProfileContainer)

export default connect( mapStateToProps, { setProfile, getProfile: getProfileTC } )(WithRouterProfileComponent); 