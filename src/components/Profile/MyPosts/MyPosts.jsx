import React from 'react';
// import cssMyPosts from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  const Posts = props.Posts.map(post => {
    return (
      <Post message={post.message} countLikes={post.countLikes} />
    )
  });

  return (
    <div className="MyPosts">My Post
      <div className="newPost">
        <textarea className="newPost">New post</textarea>
        <button>Add post</button>
      </div>
      { Posts }
    </div>

  )
}

export default MyPosts;