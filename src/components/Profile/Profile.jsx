import React from 'react';
// import style from './Profile.module.css';
import MyPostsConteiner from './MyPosts/MyPostsContainer';
import Wallpaper from './Wallpaper/Wallpaper';
import ProfileStatus from './ProfileStatus'



const Profile = (props) => {
  let {fullName, lookingForAJob, lookingForAJobDescription, contacts, photos, setProfileStatus, status} = props
  return (
    <div>
      <Wallpaper />
      {!props.fullName ?
        null
      :
      <div className="profileWrap">
        <div>{fullName}</div>
        <div>{lookingForAJob}</div>
        <div>{lookingForAJobDescription}</div>
        <div>{contacts.github}</div>
        <div>{contacts.vk}</div>
        <div>{contacts.facebook}</div>
        <div>{contacts.instagram}</div>
        <div>{contacts.twitter}</div>
        <div>{contacts.website}</div>
        <div>{contacts.youtube}</div>
        <div>{contacts.mainLink}</div>
        <img src={photos.large} alt=""/>
      </div>}
      <ProfileStatus setProfileStatus = {setProfileStatus} status = {status}/>
      <MyPostsConteiner />
    </div>
  )
}

export default Profile;