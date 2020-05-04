import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import appReducer from './appReducer'
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer} from 'redux-form';



let reducers = combineReducers(
    {
        ProfileState: profileReducer,
        DialogState: dialogsReducer,
        UsersState: usersReducer,
        Auth: authReducer,
        form: formReducer,
        appState: appReducer
    }
)

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store; 