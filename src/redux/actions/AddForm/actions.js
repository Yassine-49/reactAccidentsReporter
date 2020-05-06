import * as API from './../../../Helpers/Api';

export const OPEN_DIALOG = 'OPEN_DIALOG';
export const CLOSE_DIALOG = 'CLOSE_DIALOG';
export const SET_DATA = 'SET_DATA';
export const POST_FORM = 'POST_FORM';

export const openDialogAction = () => dispatch => {
    dispatch({
        type: OPEN_DIALOG,
        payload: true,
    })
}

export const closeDialogAction = () => dispatch => {
    dispatch({
        type: OPEN_DIALOG,
        payload: false,
    })
}

// TODO: may be removed
export const setDataAction = (data) => dispatch => {
    dispatch({
        type: SET_DATA,
        payload: data,
    })
}

export const postFormAction = (data, token) => async dispatch => {
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
