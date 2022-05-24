import {
    USER_LIST,
    POST_LIST,
    CURRENT_POSTS_USER,
    CURRENT_ID_USER,
    COMMENTS_LIST,
    MODAL_WINDOW_ACTIVE,
    FORM_POST_STATUS
} from "./types";


export const defaultState = {
    userList: [],
    postList: [],
    postsCurrentUser: [],
    currentIdUser: '',
    commentsList: [],
    modalActive: false,
    isFormPost: false
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
        case COMMENTS_LIST:
            return {
                ...state,
                commentsList: action.payload
            }
        case MODAL_WINDOW_ACTIVE:
            return {
                ...state,
                modalActive: action.payload
            }

        case FORM_POST_STATUS:
            return {
                ...state,
                isFormPost: action.payload
            }
        default: {
            return state
        }
    }
}





