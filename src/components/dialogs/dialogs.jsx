import React from 'react';
import s from './dialogs.module.css'
import DialogItem from "./dialogItem/dialogItem";
import Message from "./message/message";

const Dialogs = (props) => {

    let newMessageBody = props.dialogPage.newMessageText;

    let dialogsElements = props.dialogPage.dialogsData.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);

    let messageElements = props.dialogPage.messageData.map(message =>
        <Message message={message.message} key={message.id}/>);

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onAddMessage = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);

    }

    return <div>
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody} onChange={onAddMessage}
                                  placeholder='Enter your message'/>
                    </div>
                    <div>
                        <button className={s.btn} onClick={onSendMessage}>Click</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Dialogs;