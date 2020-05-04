import React from 'react';
// import cssMyPosts from './MyPosts.module.css'
import Post from './Post/Post';
import NewPostReduxForm from './NewPostReduxForm'

const MyPosts = (props) => {

  let onAddPost = (value, e) => {
    props.addPost(value.newPost);
    //e.target.reset();
  }  

  const Posts = props.posts.map(post => {
    return (
      <Post key={post.id} message={post.message} countLikes={post.countLikes} />
    )
  });  

  return (
    <div className="MyPosts">
      <NewPostReduxForm onSubmit={onAddPost} />
      { Posts }
    </div>

  )
}

export default MyPosts;