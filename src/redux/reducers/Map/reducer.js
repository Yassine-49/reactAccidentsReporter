import * as actions from './../../actions/Map/actions';

const initState = {
    // map:
    width: '100%',
    height: '100%',
    latitude: 32.3008,
    longitude: -9.2272,
    zoom: 12,
    maxZoom: 17,
    minZoom: 2,
    // markers:
    data: [],
    // errors:
    errors: null,
}

const mapReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.GET_DATA:
            return{
                ...state,
                data: action.paylod,
            }
        case actions.SET_CENTER:
            return{
                ...state,
                latitude: action.payload[1],
                longitude: action.payload[0],
            }
        case actions.SET_ZOOM:
            return{
                ...state,
                zoom: action.payload,
            }
        case actions.SET_WIDTH:
            return{
                ...state,
                width: action.payload,
            }
        default:
            return state;
    }
}

export default mapReducer;
