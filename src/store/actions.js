import {
    USER_LIST,
    POST_LIST,
    CURRENT_POSTS_USER,
    CURRENT_ID_USER
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

export const postCurrentUserLoad = (postList) => {
    return {
        type: CURRENT_POSTS_USER,
        payload: postList
    }
}

export const idUserLoad = (id) => {
    return {
        type: CURRENT_ID_USER,
        payload: id
    }
}

