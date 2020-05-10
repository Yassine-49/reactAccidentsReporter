export const OPEN_PROMPT = 'OPEN_PROMPT';
export const CLOSE_PROMPT = 'CLOSE_PROMPT';
export const SET_YES = 'SET_YES';
export const SET_DELETE_ID = 'SET_DELETE_ID';
export const SET_DELETION_CALLBACK = 'SET_DELETION_CALLBACK';

export const openPromptAction = () => dispatch => {
    dispatch({
        type: OPEN_PROMPT,
        payload: null,
    });
}

export const closePromptAction = () => dispatch => {
    dispatch({
        type: CLOSE_PROMPT,
        payload: null,
    });
}

export const setYesAction = () => dispatch => {
    dispatch({
        type: SET_YES,
        payload: null,
    });
}

export const setDeleteIdAction = (id) => dispatch => {
    dispatch({
        type: SET_DELETE_ID,
        payload: id,
    });
}

export const setDeletionCallbackAction = (callback) => async dispatch => {
    await dispatch({
        type: SET_DELETION_CALLBACK,
        payload: callback,
    });
    return 1;
}
