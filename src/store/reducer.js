import {
    USER_LIST,
    POST_LIST,
    CURRENT_POSTS_USER,
    CURRENT_ID_USER
} from "./types";


export const defaultState = {
    userList: [],
    postList: [],
    postsCurrentUser: [],
    currentIdUser: ''
}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case USER_LIST:
            return {
                ...state,
                userList: action.payload
            }
        case POST_LIST:
            return {
                ...state,
                postList: action.payload
            }
        case CURRENT_POSTS_USER:
            return {
                ...state,
                postsCurrentUser: action.payload
            }
        case CURRENT_ID_USER:
            return {
                ...state,
                currentIdUser: action.payload
            }

        default: {
            return state
        }
    }
}





