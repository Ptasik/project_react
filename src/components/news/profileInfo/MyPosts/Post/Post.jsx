import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return <div className={s.item}>
        <img src="https://cdn.nlotv.com/i/image_1140x561/uploads/nlo/news/5e15a12b4a94c_thumb_1920_79588.jpeg" alt=""/>
        {props.message};
        <div>
            <span>Like {props.likes}</span>
        </div>
    </div>
}

export default Post;