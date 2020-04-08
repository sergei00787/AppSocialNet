import React from 'react';
// import cssMyPosts from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let refTextArea = React.createRef();

  let addPost = () => {
    props.addPost();
  }  

  const Posts = props.Posts.map(post => {
    return (
      <Post message={post.message} countLikes={post.countLikes} />
    )
  });

  let onPostChange = () => {
    let text = refTextArea.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className="MyPosts">My Post
      <div className="newPostContainer">
        <textarea className="newPost" 
                  ref={refTextArea} 
                  value = {props.NewPost} 
                  onChange={onPostChange}/>

        <button onClick = {addPost} >Add post</button>
      </div>
      { Posts }
    </div>

  )
}

export default MyPosts;