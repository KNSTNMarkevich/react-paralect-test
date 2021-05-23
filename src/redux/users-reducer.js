import {getUserInfo} from '../api/api.js'

const SET_USER_NAME = 'SET_USER_NAME'


let initialState ={
    username: null
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_NAME: {
            return {
                ...state,
                username: action.username
            }
        }
        default:
            return state;
    }
}

export const SetUser = (username) => {
    return {type: SET_USER_NAME, username}
}



export default usersReducer;