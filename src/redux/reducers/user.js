const defaultUserState = { };


function user(state = defaultUserState, action) {
    switch (action.type) {
        case 'USER:SET_USER': {
            return {
                ...state,
                ...action.user
            }
        }
        case 'USER:UPDATE_PERMISSION': {
            return {
                ...state,
                permission: true
            }
        }
        default:
            return {...state}
    }
}

export default user;
