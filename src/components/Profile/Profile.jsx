import React from 'react';
// import style from './Profile.module.css';
import MyPostsConteiner from './MyPosts/MyPostsConteiner';
import Wallpaper from './Wallpaper/Wallpaper';



const Profile = (props) => {

  return (
    <div>
      <Wallpaper />
      <div className="profileWrap">
        <div>{props.fullName}</div>
        <div>{props.lookingForAJob}</div>
        <div>{props.lookingForAJobDescription}</div>
        <div>{props.contacts.github}</div>
        <div>{props.contacts.vk}</div>
        <div>{props.contacts.facebook}</div>
        <div>{props.contacts.instagram}</div>
        <div>{props.contacts.twitter}</div>
        <div>{props.contacts.website}</div>
        <div>{props.contacts.youtube}</div>
        <div>{props.contacts.mainLink}</div>
        <img src={props.photos.large} alt=""/>
      </div>
      <MyPostsConteiner />
    </div>
  )
}

export default Profile;