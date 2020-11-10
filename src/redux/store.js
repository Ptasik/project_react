import profileReducer from "./profile_reducer";
import friendsReducer from "./friends_reducer";
import dialogsReducer from "./dialogs_reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'hiiiiiiii', likes: 15},
                {id: 2, message: 'kykykykykykyk', likes: 6},
            ],
            newPostText: 'it-kamasutra'
        },
        dialogPage: {
            messageData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Ky-Ky'},
            ],

            newMessageText: '',

            dialogsData: [
                {id: 1, name: 'Ihor'},
                {id: 2, name: 'Dadik'},
                {id: 3, name: 'Mira'},
                {id: 4, name: 'Yana'},
                {id: 5, name: 'Dasha'},
            ]
        },

        friendsPage: {
            friends: [
                {id: 1, name: 'Ihor'},
                {id: 2, name: 'Dadik'},
                {id: 3, name: 'Mira'},
            ]
        }

    },

    _callSubscriber() {
        console.log('f');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;
