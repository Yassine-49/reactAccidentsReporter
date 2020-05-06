import * as actions from './../../actions/AddForm/actions';

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

const addFormReducer = (state = initState, action) => {
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
        case actions.SET_DATA:
            return{
                ...state,
                data: { ...state.data,
                    ...action.payload
                },
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

export default addFormReducer;
