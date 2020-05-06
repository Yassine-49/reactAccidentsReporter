import * as actions from './../../actions/Map/actions';

const initState = {    
    // markers:
    markers: [],
    // errors:
    errors: null,
}

const mapReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.GET_DATA:
            return{
                ...state,
                markers: action.payload,
            }
            // TODO: test what's below
        case actions.SET_CENTER:
            return{
                ...state,
                [state.viewport.latitude]: action.payload[1],
                [state.viewport.longitude]: action.payload[0],
            }
        case actions.SET_ZOOM:
            return{
                ...state,
                [state.viewport.zoom]: action.payload,
            }
        case actions.SET_WIDTH:
            return{
                ...state,
                [state.viewport.width]: action.payload,
            }
        default:
            return state;
    }
}

export default mapReducer;
