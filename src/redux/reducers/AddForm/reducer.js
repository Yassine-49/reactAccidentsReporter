import * as actions from './../../actions/AddForm/actions';

const initState = {
    // data:
    title: '',
    description: '',
    numberOfInjuries: 0,
    isResolved: false,

    // form state:
    isOpen: true,

    // errors:
    errors: null,
}

const addFormReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.OPEN_DIALOG:
            return{
                ...state,
                isOpen: action.paylod,
            }
        case actions.CLOSE_DIALOG:
            return{
                ...state,
                isOpen: action.paylod,
            }
        case actions.SET_DATA:
            return{
                ...state,
                ...action.payload,
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
