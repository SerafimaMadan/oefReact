import React from 'react';
import s from './Post.module.css';
//@ts-check

const Post = (props) => {
  
  return (

   <div className={s.item}>
   <img alt="ava" src="https://the-fasol.com/upload/img_all/todd_carey.jpg"/>
   {props.message}
   <div>
   <span>like</span>{props.like}
   </div>
   </div>

    );
  }
  export default Post;