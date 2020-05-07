import { combineReducers } from 'redux';

import mapReducer from './Map/reducer';
import formReducer from './Form/reducer';
import userReducer from './User/reducer';

const rootReducer = combineReducers({
    map: mapReducer,
    form: formReducer,
    user: userReducer,
});

export default rootReducer;
