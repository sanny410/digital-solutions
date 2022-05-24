import {
    USER_LIST,
    POST_LIST,
    CURRENT_POSTS_USER,
    CURRENT_ID_USER,
    COMMENTS_LIST,
    MODAL_WINDOW_ACTIVE,
    FORM_POST_STATUS
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

export const commentsListLoad = (comments) => {
    return {
        type: COMMENTS_LIST,
        payload: comments
    }
}

export const isActiveModal = (status) => {
    return {
        type: MODAL_WINDOW_ACTIVE,
        payload: status
    }
}

export const isFormPost = (status) => {
    return {
        type: FORM_POST_STATUS,
        payload: status
    }
}

