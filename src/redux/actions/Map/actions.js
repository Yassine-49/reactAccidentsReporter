import * as API from './../../../Helpers/Api';

export const GET_DATA = 'GET_DATA';
export const SET_VIEWPORT = 'SET_VIEWPORT';
export const SET_WIDTH = 'SET_WIDTH';
export const SET_POPUP = 'SET_POPUP';

export const getDataAction = (token) => async dispatch => {
    
    try{
        const res = await API.gettEntries(token);
        await dispatch({
            type: GET_DATA,
            payload: res.data,
        });
        return res;
    } catch(error)
    {
        return error;
    }
}

export const setViewportAction = (viewport) => dispatch => {
    dispatch({
        type: SET_VIEWPORT,
        payload: viewport,
    });
}

export const setWidthAction = (width) => dispatch => {
    dispatch({
        type: SET_WIDTH,
        payload: width,
    });
}

export const setPopupAction = (isOpen, id = null, lngLat = []) => dispatch => {
    dispatch({
        type: SET_POPUP,
        payload: {isOpen, id, lngLat},
    });
}
