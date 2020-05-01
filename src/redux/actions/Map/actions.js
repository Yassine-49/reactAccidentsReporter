export const GET_DATA = 'GET_DATA';
export const SET_CENTER = 'SET_CENTER';
export const SET_ZOOM = 'SET_ZOOM';
export const SET_WIDTH = 'SET_WIDTH';

export const getDataAction = () => dispatch => {
    // TODO: make the API call and return the data
    dispatch({
        type: GET_DATA,
        payload: null,
    })
}

export const setCenterAction = (center) => dispatch => {
    dispatch({
        type: SET_CENTER,
        payload: center,
    })
}

export const setZoomAction = (zoom) => dispatch => {
    dispatch({
        type: SET_ZOOM,
        payload: zoom,
    })
}

export const setWidthAction = (width) => dispatch => {
    dispatch({
        type: SET_WIDTH,
        payload: width,
    })
}
