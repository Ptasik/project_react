const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
    postsData: [
        {id: 1, message: 'hiiiiiiii', likes: 15},
        {id: 2, message: 'kykykykykykyk', likes: 6},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state};

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likes: 0
            };
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;

        case UPDATE_NEW_POST:
            stateCopy.newPostText = action.newText;
            return stateCopy;

        default:
            return state;

    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostActionCreator = (text) => ({
        type: UPDATE_NEW_POST,
        newText: text
    }
)

export default profileReducer;