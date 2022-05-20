import {
    USER_LIST,
    POST_LIST,
    CURRENT_POSTS_USER
} from "./types";


export const listUserLoad = (users) => {
    return {
        type: USER_LIST,
        payload: users
    }
}

export const postListLoad = (posts) => {
    return {
        type: POST_LIST,
        payload: posts
    }
}

export const postCurrentUserLoad = (posts) => {
    return {
        type: CURRENT_POSTS_USER,
        payload: posts
    }
}
