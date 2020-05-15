import * as API from '../../../Helpers/Api';

export const OPEN_DIALOG = 'OPEN_DIALOG';
export const CLOSE_DIALOG = 'CLOSE_DIALOG';
export const POST_FORM = 'POST_FORM';
export const UPDATE_FORM = 'UPDATE_FORM';
export const DELTE_ITEM = 'DELETE_ITEM';
export const SET_DATA = 'SET_DATA';
export const SET_ERRORS = 'SET_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const openDialogAction = () => dispatch => {
    dispatch({
        type: OPEN_DIALOG,
        payload: true,
    });
}

export const closeDialogAction = () => dispatch => {
    dispatch({
        type: OPEN_DIALOG,
        payload: false,
    });
}

export const postFormAction = (data, token) => async dispatch => {
    try {
        const res = await API.addEntry(data, token);
        await dispatch({
            type: POST_FORM,
            payload: res.data,
        });
        dispatch({
            type: SET_ERRORS,
            payload: {
                name: 'success',
                message: res.data.message,
            }
        });
        return res;
    } catch (error) {
        await dispatch({
            type: SET_ERRORS,
            payload: {
                name: error.name,
                message: error.message,
            }
        });
        return error;
    }
}

export const updateFormAction = (data, token) => async dispatch => {
    try {
        const res = await API.editEntry(data, token);
        await dispatch({
            type: UPDATE_FORM,
            payload: res,
        });
        dispatch({
            type: SET_ERRORS,
            payload: {
                name: 'success',
                message: res.data.message,
            }
        });
        return res;
    } catch (error) {
        await dispatch({
            type: SET_ERRORS,
            payload: {
                name: error.name,
                message: error.message,
            }
        });
        return error;
    }
}

export const deleteItemAction = (data, token) => async dispatch => {
    try {
        const res = await API.deleteEntry(data, token);
        await dispatch({
            type: DELTE_ITEM,
            payload: res.data,
        });
        dispatch({
            type: SET_ERRORS,
            payload: {
                name: 'success',
                message: res.data.message,
            }
        });
        return res;
    } catch (error) {
        await dispatch({
            type: SET_ERRORS,
            payload: {
                name: error.name,
                message: error.message,
            }
        });
        return error;
    }
}

export const setDataAction = (data) => dispatch => {
    dispatch({
        type: SET_DATA,
        payload: data,
    });
}

export const setErrorsAction = (error) => dispatch => {
    dispatch({
        type: SET_ERRORS,
        payload: {
            name: error.name,
            message: error.message,
        }
    });;
}

export const clearErrorsAction = () => dispatch => {
    dispatch({
        type: CLEAR_ERRORS,
        payload: null,
    });
}
