import * as actions from './../../actions/Form/actions';

const initState = {
    // data:
    data: {
        id: null,
        title: '',
        description: '',
        numberOfInjuries: 0,
        isResolved: false,
        latitude: null,
        longitude: null,
    },

    // form state:
    isOpen: false,

    // errors:
    errors: null,
}

const formReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.OPEN_DIALOG:
            return{
                ...state,
                isOpen: action.payload,
            }
        case actions.CLOSE_DIALOG:
            return{
                ...state,
                isOpen: action.payload,
            }
        case actions.POST_FORM:
            return{
                ...state,
                errors: action.payload || null,
            }
        case actions.SET_DATA:
            return{
                ...state,
                data: {
                    id: action.payload.id || null,
                    title: action.payload.title || '',
                    description: action.payload.description || '',
                    numberOfInjuries: action.payload.numberOfInjuries || 0,
                    isResolved: action.payload.isResolved || false,
                    latitude: action.payload.latitude,
                    longitude: action.payload.longitude,
                }
            }
    
        default:
            return state;
    }
}

export default formReducer;
