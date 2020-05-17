import * as API from './../../../Helpers/Api';

export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_USER_ERRORS = 'SET_USER_ERRORS';
export const CLEAR_USER_ERRORS = 'CLEAR_USER_ERRORS';

export const registerAction = data => async dispatch => {
    try{
        const res = await API.register(data);
        // TODO: check result before dispatching
        await dispatch({
            type: REGISTER,
            payload: res.data,
        });
        dispatch({
            type: SET_USER_ERRORS,
            payload: {
                name: 'success',
                message: res.data.message,
            }
        });
        return res;
    } catch(error)
    {
        dispatch({
            type: SET_USER_ERRORS,
            payload: {
                name: error.name,
                message: error.message,
            }
        });
        return error;
    }
}

export const loginAction = user => async dispatch => {

    let res;

    try{
        res = await API.login(user);
        await dispatch({
            type: LOGIN,
            payload: res.data,
        });
        dispatch({
            type: SET_USER_ERRORS,
            payload: {
                name: 'success',
                message: res.data.message,
            }
        });
        return res;
    } catch(error)
    {
        dispatch({
            type: SET_USER_ERRORS,
            payload: {
                name: error.name,
                message: error.response ? error.response.statusText : error.message,
            }
        });
        return error.response ? error.response.statusText : error.message;
    }
}

export const logoutAction = () => dispatch => {
    dispatch({
        type: LOGOUT,
        payload: false,
    });
    return 1;
}

export const clearUserErrorsAction = () => dispatch => {
    dispatch({
        type: CLEAR_USER_ERRORS,
        payload: null,
    });
}
