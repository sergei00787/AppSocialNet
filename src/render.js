import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost } from './state';
import { BrowserRouter } from 'react-router-dom';

let rerender = (state) => {
    ReactDOM.render(
    <BrowserRouter>
        < App state={state}
            addPost={addPost} />
    </BrowserRouter>
        , document.getElementById('root'));
}

export default rerender;