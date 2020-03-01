import React from 'react';
import cssMyPosts from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div className="MyPosts">mypost
      <div className="newpost">newpost</div>
      <Post message="HI, I'm cool hacker=)" countLikes="100000" />
      <Post message="HI, hacker=)" countLikes="10" />
      <Post message="What is REACT APP" countLikes="1000000" />
    </div>

  )
}

export default MyPosts;