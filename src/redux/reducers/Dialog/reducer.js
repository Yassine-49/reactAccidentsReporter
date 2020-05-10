import * as actions from './../../actions/Dialog/actions';

const initState = {
    isOpen: false,
    yes: false,
    id: null,
    callback: null,
}

const dialogReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.OPEN_PROMPT:
            return{
                ...state,
                isOpen: true,
            }
        case actions.CLOSE_PROMPT:
            return{
                ...state,
                isOpen: false,
                yes: false,
                callback: null,
            }
        case actions.SET_YES:
            return{
                ...state,
                yes: true,
            }
        case actions.SET_DELETE_ID:
            return{
                ...state,
                id: action.payload,
            }
        case actions.SET_DELETION_CALLBACK:
            return{
                ...state,
                callback: action.payload,
            }
    
        default:
            return state;
    }
}

export default dialogReducer;
