const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {...state};

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            };
            stateCopy.messageData.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;

        case ADD_NEW_MESSAGE:
            stateCopy.newMessageText = action.newText;
            return stateCopy;

        default:
            return state;
    }
}

export const newMessageActionCreator = () => ({type: ADD_MESSAGE});

export const addMessageActionCreator = (text) => ({
        type: ADD_NEW_MESSAGE,
        newText: text
    }
)


export default dialogsReducer;