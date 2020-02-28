import React from 'react';
import cssProfile from './Profile.module.css'

const Profile = () => {
  return (
    <div className={cssProfile.content}>
      <div className="">
        <img src="https://www.tokkoro.com/picsup/5571787-social-network-wallpapers.jpg" />
      </div>
      <div className="">ava + desc</div>
      <div className="mypost">mypost</div>
      <div className="newpost">newpost</div>
      <div className={cssProfile.item}>post1</div>
      <div className={cssProfile.item}>post2</div>

    </div>
  )
}

export default Profile;