import {
    USER_LIST,
} from "./types";


export const defaultState = {
    userList: []
}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case USER_LIST:
            return {
                ...state,
                userList: action.payload
            }

        default: {
            return state
        }
    }
}





