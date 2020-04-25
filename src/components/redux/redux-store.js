import {createStore, combineReducers} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';



let reducers = combineReducers(
    {
        ProfileState: profileReducer,
        DialogState: dialogsReducer,
        UsersState: usersReducer,
        Auth: authReducer  
    }
)

let store = createStore(reducers);

export default store; 