import React from 'react';
// import style from './Profile.module.css';
import MyPostsConteiner from './MyPosts/MyPostsConteiner';
import Wallpaper from './Wallpaper/Wallpaper';


const Profile = (props) => {
  
  return (
    <div>
      <Wallpaper />
      <MyPostsConteiner />
    </div>
  )
}

export default Profile;