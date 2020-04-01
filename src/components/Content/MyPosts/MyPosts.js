import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (

        <div className={s.postsBlock}>
            <h3> my post </h3>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                <Post message="Hi" like="15"/>
                <Post message="It's my post" like="10"/>
                <Post message="This good" like="20"/>
            </div>
        </div>
    );
};
export default MyPosts;