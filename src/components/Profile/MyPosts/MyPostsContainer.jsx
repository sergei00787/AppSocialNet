import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/profileReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return (
    {
      posts: state.ProfileState.Posts,
      newPost: state.ProfileState.NewPost
    }
  )
}

let mapDispatchToProps = (dispatch) => {
  return (
    {
      addPost: () => {
        dispatch(addPostActionCreator())
      }, 
      updateNewPostText: (text) => {
        dispatch(updateNewPostTextActionCreator(text))
      }
    }
  )
}

const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsConteiner;