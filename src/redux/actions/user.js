import plantsApi from "../../core/axios/api/plantsApi";

export const setUser = user => ({
    type: 'USER:SET_USER',
    user
});

const updatePermission = () => ({
    type: 'USER:UPDATE_PERMISSION'
});

export const fetchUser = () => async dispatch => {
    const user = await plantsApi.getUser();
    dispatch(setUser(user));
}

