import MyPosts from './MyPosts';
import { addPost } from './../../../redux/profileReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return (
    {
      posts: state.ProfileState.Posts,
      newPost: state.ProfileState.NewPost
    }
  )
}

const MyPostsConteiner = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsConteiner;