import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import { getProfileTC, getProfileStatusTC, setProfileStatusTC } from '../../redux/profileReducer';
import { withRouter} from 'react-router-dom';
import whitRedirectHoc  from './../Hocs/RedirectHoc'
import { compose } from 'redux';


class ProfileContainer extends React.Component
{
  componentDidMount() {
    let userId = (this.props.match.params.userId !== undefined) ? this.props.match.params.userId : this.props.userId
    this.props.getProfile( userId );
    this.props.getProfileStatus( userId);
  }

  render () {
      return (
        <Profile {...this.props.profile} setProfileStatus={this.props.setProfileStatus} status = {this.props.status}/>
      )
  }  
  
}

let mapStateToProps = (state) => {
  return { profile: state.ProfileState.profile, status: state.ProfileState.status }  
}

export default compose( connect(mapStateToProps,{ getProfile: getProfileTC , 
                                                  setProfileStatus: setProfileStatusTC,
                                                  getProfileStatus: getProfileStatusTC }), 
                        withRouter,  
                        whitRedirectHoc)(ProfileContainer);

