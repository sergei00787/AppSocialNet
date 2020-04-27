import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './components/redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import {Provider} from 'react-redux';

// let rerender = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        < App />
      </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
// }

window.store = store;
// rerender(store.getState());

// store.subscribe(() => {
//   let state = store.getState();
//   rerender(state);
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();