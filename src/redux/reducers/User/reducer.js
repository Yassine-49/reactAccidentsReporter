import * as actions from './../../actions/User/actions';

const initState = {
    email: '',
    username: '',
    token: '',
    isLoggedIn: false,
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.REGISTER:
            return{
                email: action.payload.email,
                username: action.payload.username,
                token: action.payload.token,
                isLoggedIn: true,
            }
        case actions.LOGIN:
            return{
                email: action.payload.email,
                username: action.payload.username,
                token: action.payload.token,
                isLoggedIn: true,
            }
        case actions.LOGOUT:
            return{
                email: '',
                username: '',
                token: '',
                isLoggedIn: false,
            }
    
        default:
            return state;
    }
}

export default userReducer;
