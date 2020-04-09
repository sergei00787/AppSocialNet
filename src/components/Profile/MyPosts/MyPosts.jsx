import React from 'react';
// import cssMyPosts from './MyPosts.module.css'
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../profileReducer';


const MyPosts = (props) => {

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }  

  let onPostChange = (event) => {
    // let text = refTextArea.current.value;
    let text = event.target.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  const Posts = props.Posts.map(post => {
    return (
      <Post message={post.message} countLikes={post.countLikes} />
    )
  });

  

  return (
    <div className="MyPosts">My Post
      <div className="newPostContainer">
        <textarea className="newPost" 
                  value = {props.NewPost} 
                  onChange={onPostChange}/>

        <button onClick = {addPost} >Add post</button>
      </div>
      { Posts }
    </div>

  )
}

export default MyPosts;