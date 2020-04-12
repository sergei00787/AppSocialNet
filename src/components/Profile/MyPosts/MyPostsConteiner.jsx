import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profileReducer';
import StoreContext from '../../redux/context/store-context';


const MyPostsConteiner = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let updateNewPostText = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };
        return (
          <MyPosts addPost={addPost} updateNewPostText={updateNewPostText} posts={state.ProfileState.Posts} newPost={state.ProfileState.NewPost} />
        )
      }

      }
    </StoreContext.Consumer>

  )
}

export default MyPostsConteiner;