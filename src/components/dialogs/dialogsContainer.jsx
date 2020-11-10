import React from 'react';
import {addMessageActionCreator, newMessageActionCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";

let MapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}

let MapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(newMessageActionCreator());
        },
        updateNewMessageText: (text) => {
            dispatch(addMessageActionCreator(text));
        }
    }
}

const DialogsContainer = connect(MapStateToProps, MapDispatchToProps)(Dialogs);

export default DialogsContainer;