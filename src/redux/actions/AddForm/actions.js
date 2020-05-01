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

export const setDataAction = (data) => dispatch => {
    dispatch({
        type: SET_DATA,
        payload: data,
    })
}

export const postFormAction = (data) => dispatch => {
    // TODO: make the API call and return error or success
    dispatch({
        type: POST_FORM,
        payload: null,
    })
}
