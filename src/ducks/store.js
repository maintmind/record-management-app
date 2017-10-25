import { createStore, applyMiddleware } from 'redux'; 

import promiseMiddleware from 'redux-promise-middleware';


import dashReducer from './reducer';


export default createStore(
    dashReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(promiseMiddleware()) 
);