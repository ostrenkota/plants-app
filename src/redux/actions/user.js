import plantsApi from "../../core/axios/api/plantsApi";

export const setUser = user => ({
    type: 'USER:SET_USER',
    user
});

const updatePermission = () => ({
    type: 'USER:UPDATE_PERMISSION'
});

export const updatePermissionAndSendToServer = () => async dispatch => {
    const user = await plantsApi.getUser();
    console.log('user', user);
    dispatch(setUser(user));
}

