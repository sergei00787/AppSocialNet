import React from 'react';
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return (
    <div>
      <div className={style.wallpaper}>
        <img src="https://www.tokkoro.com/picsup/5571787-social-network-wallpapers.jpg" />
      </div>
      <div className="">ava + desc</div>
      <MyPosts />
    </div>
  )
}

export default Profile;