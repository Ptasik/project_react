import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.postsData.map(post =>
        <Post message={post.message} likes={post.likes} key={post.id}/>);

    let onAddPost = () => {
        props.addPost();

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }

    let newPostElement = React.createRef();

    return <div className={s.postsBlock}>
        <h3>my post</h3>
        <div>
            <div>
                <textarea ref={newPostElement}
                          value={props.newPostText}
                          onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;