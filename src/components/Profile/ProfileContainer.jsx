import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import { getProfileTC } from '../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';
import whitRedirectHoc  from './../Hocs/RedirectHoc'
import { compose } from 'redux';


class ProfileContainer extends React.Component
{
  componentDidMount() {
    let userId = (this.props.match.params.userId !== undefined) ? this.props.match.params.userId : this.props.userId
    this.props.getProfile( userId );
  }

  render () {
      return (
        <Profile {...this.props.profile} />
      )
  }  
  
}

let mapStateToProps = (state) => {
  return { profile: state.ProfileState.profile }  
}

export default compose( connect(mapStateToProps,{ getProfile: getProfileTC }), withRouter,  whitRedirectHoc)(ProfileContainer);

