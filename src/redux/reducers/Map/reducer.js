import * as actions from './../../actions/Map/actions';

const initState = {
    // viewport:
    viewport: {
        width: '100%',
        height: '100%',
        latitude: 32.3008,
        longitude: -9.2272,
        zoom: 12,
        maxZoom: 17,
        minZoom: 2,
    },
    // markers:
    markers: [],
    // popup:
    popup: {
        isOpen: false,
        id: null,
        latitude: null,
        longitude: null,
    },
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
        case actions.SET_VIEWPORT:
            return{
                ...state,
                viewport: {
                    ...state.viewport,
                    ...action.payload,
                },
            }
        case actions.SET_POPUP:
            return{
                ...state,
                popup: {
                    isOpen: action.payload.isOpen,
                    id: action.payload.id,
                    latitude: action.payload.lngLat[1],
                    longitude: action.payload.lngLat[0],
                }
            }
        case actions.CLEAR_DATA:
            return{
                ...state,
                markers: [],
            }
        default:
            return state;
    }
}

export default mapReducer;
