import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let MapStateToProps = (state)=>{
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
};

let MapDispatchToProps = (dispatch) => {
    return {
        addPost:()=>{
            dispatch(addPostActionCreator());
        },

        updateNewPostText: (text) => {
            dispatch(updateNewPostActionCreator(text));

        }
    }
}

const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts)

export default MyPostsContainer;