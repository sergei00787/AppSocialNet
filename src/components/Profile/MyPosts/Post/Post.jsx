import React from 'react';
import cssPost from './Post.module.css'


const Post = (props) => {
  return (
    <div className={cssPost.postconteiner}>
      <img className={cssPost.avatar} src="https://avatars.mds.yandex.net/get-pdb/753890/572330fb-c49e-47c8-a9c7-c04582ace159/s1200" alt=""/>  
      <span className={cssPost.item}>{props.message}</span>
      <div className="like">{props.countLikes}</div>
    </div>

  )
}

export default Post;