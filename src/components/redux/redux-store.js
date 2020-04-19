import {createStore, combineReducers} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';



let reducers = combineReducers(
    {
        ProfileState: profileReducer,
        DialogState: dialogsReducer,
        UsersState: usersReducer    
    }
)

let store = createStore(reducers);

export default store; 