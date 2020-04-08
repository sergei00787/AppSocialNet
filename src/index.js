import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './state';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

let rerender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
        < App state={state}
              addPost={store.addPost.bind(store)} 
              updateNewPostText = {store.updateNewPostText.bind(store)}/>
        </BrowserRouter>
        , document.getElementById('root'));
}

rerender(store.getState());

store.subscribe(rerender);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();