import React from 'react';
import s from './friends.module.css'
import Friend from "./friend/friend";


const Friends = (props) => {
    debugger;
    let friendElements = props.state.friends.map(friend => <Friend friend={friend.name}/>);

    return <div>
        <div className={s.friends}>
            {friendElements}
        </div>
    </div>
}

export default Friends;