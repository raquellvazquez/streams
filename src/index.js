import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from './reducers/index';

import App from './components/App';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

ReactDOM.render(
    <Provider  store={store}>
        <App />
    </Provider>, 
    document.querySelector('#root')
);