import {
    USER_LIST
} from "./types";


export const listUserLoad = (users) => {
    return {
        type: USER_LIST,
        payload: users
    }
}
