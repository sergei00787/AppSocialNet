import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Wallpaper from './Wallpaper/Wallpaper';


const Profile = () => {
  const Posts = [
    { id:1, message: "HI, I'm cool hacker=)", countLikes: 100 },
    { id:2, message: "HI, I'm cool hacker=)", countLikes: 1000 },
    { id:3, message: "HI, I'm cool hacker=)", countLikes: 10000 },
    { id:4, message: "HI, I'm cool hacker=)", countLikes: 100000 },
  ]

  return (
    <div>
      <Wallpaper />
      <MyPosts Posts={Posts}/>
    </div>
  )
}

export default Profile;