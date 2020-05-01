import * as API from './../../../Helpers/Api';

export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const registerAction = data => async dispatch => {
    try{
        const res = await API.register(data);
        // TODO: check result before dispatching
        await dispatch({
            type: REGISTER,
            payload: res.data, // TODO: make sure you have the same result from api
        });

        return res;
    } catch(error)
    {
        return error;
    }
}

export const loginAction = user => async dispatch => {

    try{
        const res = await API.login(user);
        // TODO: check result before dispatching
        await dispatch({
            type: LOGIN,
            payload: res.data,
        });
        
        return res;
    } catch(error)
    {
        return error;
    }
}

export const logoutAction = () => dispatch => {
    dispatch({
        type: LOGOUT,
        payload: false,
    });
    return 1;
}
