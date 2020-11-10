import React from 'react';
import s from './profileInfo.module.css';
import image from '../../.././image.svg';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.contentImg}>
                <img src={image} alt=""/>
            </div>
            <div className={s.profileInfoBlock}>
                ava
            </div>
        </div>
    )
}

export default ProfileInfo;