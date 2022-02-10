import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import allReducer from './reducers/index'


const myStore = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider  store={myStore}>
        <App />
    </Provider>
, document.getElementById('root'));


