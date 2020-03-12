import React from 'react';
// import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Wallpaper from './Wallpaper/Wallpaper';


const Profile = (props) => {
  
  return (
    <div>
      <Wallpaper />
      <MyPosts Posts={props.profileState.Posts} addPost={props.addPost}/>
    </div>
  )
}

export default Profile;