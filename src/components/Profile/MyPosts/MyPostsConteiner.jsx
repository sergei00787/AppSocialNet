import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profileReducer';


const MyPostsConteiner = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let updateNewPostText = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  }


  return (
    <MyPosts addPost={addPost} updateNewPostText={updateNewPostText} posts={state.ProfileState.Posts} newPost={state.ProfileState.NewPost}/>
  )
}

export default MyPostsConteiner;