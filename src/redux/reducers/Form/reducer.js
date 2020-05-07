import * as actions from './../../actions/Form/actions';

const initState = {
    // data:
    data: {
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
    
        default:
            return state;
    }
}

export default formReducer;
