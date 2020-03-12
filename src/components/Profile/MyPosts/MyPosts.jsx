import React from 'react';
// import cssMyPosts from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let addPost = () => {

    let text = refTextArea.current.value;
    props.addPost(text);
  }

  let refTextArea = React.createRef();

  const Posts = props.Posts.map(post => {
    return (
      <Post message={post.message} countLikes={post.countLikes} />
    )
  });

  return (
    <div className="MyPosts">My Post
      <div className="newPost">
        <textarea className="newPost" ref={refTextArea}>New post</textarea>
        <button onClick = {addPost} >Add post</button>
      </div>
      { Posts }
    </div>

  )
}

export default MyPosts;