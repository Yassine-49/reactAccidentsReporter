import { combineReducers } from 'redux';

import navigationReducer from './Navigation/reducer';
import mapReducer from './Map/reducer';
import addFormReducer from './AddForm/reducer';
import userReducer from './User/reducer';

const rootReducer = combineReducers({
    navigation: navigationReducer,
    map: mapReducer,
    addForm: addFormReducer,
    user: userReducer,
});

export default rootReducer;
