import * as API from '../../../Helpers/Api';

export const OPEN_DIALOG = 'OPEN_DIALOG';
export const CLOSE_DIALOG = 'CLOSE_DIALOG';
export const POST_FORM = 'POST_FORM';
export const UPDATE_FORM = 'UPDATE_FORM';
export const DELTE_ITEM = 'DELETE_ITEM';
export const SET_DATA = 'SET_DATA';

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
    console.log('data:', data);
    try {
        const res = await API.addEntry(data, token);
        await dispatch({
            type: POST_FORM,
            payload: res.data,
        });
        return res;
    } catch (error) {
        return error;
    }
}

export const updateFormAction = (data, token) => async dispatch => {
    console.log('data:', data);
    try {
        const res = await API.editEntry(data, token);
        await dispatch({
            type: UPDATE_FORM,
            payload: res,
        });
        return res;
    } catch (error) {
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
        return res;
    } catch (error) {
        return error;
    }
}

export const setDataAction = (data) => dispatch => {
    dispatch({
        type: SET_DATA,
        payload: data,
    })
}
