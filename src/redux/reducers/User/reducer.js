import * as actions from './../../actions/User/actions';

const initState = {
    email: '',
    username: '',
    token: '',
    isLoggedIn: false,
    errors: null,
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.REGISTER:
            return{
                email: action.payload.email,
                username: action.payload.username,
                token: action.payload.token,
                isLoggedIn: true,
                errors: action.payload.message,
            }
        case actions.LOGIN:
            return{
                email: action.payload.email,
                username: action.payload.username,
                token: action.payload.token,
                isLoggedIn: true,
                errors: action.payload.message,
            }
        case actions.LOGOUT:
            return{
                email: '',
                username: '',
                token: '',
                isLoggedIn: false,
            }
        case actions.SET_USER_ERRORS:
            return{
                ...state,
                errors: action.payload,
            }
        case actions.CLEAR_USER_ERRORS:
            return{
                ...state,
                errors: null,
            }
        case actions.SET_LOCALSTORAGE:
            return{
                ...state,
                email: action.payload.email,
                username: action.payload.username,
                token: action.payload.token,
                isLoggedIn: true,
            }
    
        default:
            return state;
    }
}

export default userReducer;
