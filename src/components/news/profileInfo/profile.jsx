import React from 'react';
import s from './profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={s.contentImg}>
                <img src="https://www.wellnessworld.blog/wp-content/uploads/2019/07/retreat-beauty.jpg " alt=""/>
            </div>
            <div>
                ava
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;