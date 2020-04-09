import React from 'react';
// import cssMyPosts from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {

  let onAddPost = () => {
    props.addPost();
  }  

  let onPostChange = (event) => {
    let text = event.target.value;
    props.updateNewPostText(text);
  }

  const Posts = props.posts.map(post => {
    return (
      <Post message={post.message} countLikes={post.countLikes} />
    )
  });  

  return (
    <div className="MyPosts">My Post
      <div className="newPostContainer">
        <textarea className="newPost" 
                  value = {props.newPost} 
                  onChange={onPostChange}/>

        <button onClick = {onAddPost} >Add post</button>
      </div>
      { Posts }
    </div>

  )
}

export default MyPosts;