import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        my post
        <div>
            <textarea/>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            <Post message = 'hiiiiiiii' likes = '15'/>
            <Post message = 'kykykykykykyk' likes = '6'/>
        </div>
    </div>
}

export default MyPosts;