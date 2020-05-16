import MyPosts from './MyPosts';
import { addPost } from './../../../redux/profileReducer';
import { connect } from 'react-redux';
import {GetPosts, GetNewPost} from  '../../../redux/profileSelectors'

let mapStateToProps = (state) => {
  return (
    {
      posts: GetPosts(state),
      newPost: GetNewPost(state)
    }
  )
}

const MyPostsConteiner = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsConteiner;