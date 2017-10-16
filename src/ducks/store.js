import { createStore, applyMiddleware } from 'redux'; 

import promiseMiddleware from 'redux-promise-middleware';


import dashReducer from './reducer';


export default createStore(
    dashReducer,
    applyMiddleware(promiseMiddleware()) 
);