import React from 'react';
import s from './friend.module.css'


const Friend = (props) => {

    return <div>
        <div className={s.friends}>
            <div className={s.ava}>
            </div>
            <div className={s.name}>
                {props.friend}
            </div>
        </div>
    </div>
}

export default Friend;