import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfileTC, getProfileStatusTC, setProfileStatusTC } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import whitRedirectHoc from './../Hocs/RedirectHoc'
import { compose } from 'redux';
import Preloader from '../Preloader/Preloader';
import {GetProfile, GetStatus} from '../../redux/profileSelectors';


class ProfileContainer extends React.Component {
  
  componentDidMount() {
    let userId = (this.props.match.params.userId !== undefined) ? this.props.match.params.userId : this.props.userId
    this.props.getProfile(userId);
    this.props.getProfileStatus(userId);
  }

  render() {
    if (!this.props.profile) return <Preloader />
    return (
      <Profile {...this.props.profile} setProfileStatus={this.props.setProfileStatus} status={this.props.status} />
    )
  }

}

let mapStateToProps = (state) => {
  return {
    profile: GetProfile(state),
    status: GetStatus(state)
  }
}

export default compose(connect(mapStateToProps, {
  getProfile: getProfileTC,
  setProfileStatus: setProfileStatusTC,
  getProfileStatus: getProfileStatusTC
}),
  withRouter,
  whitRedirectHoc)(ProfileContainer);

