import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import editor from './editor/reducer';
import app from './app/reducer';

const reducer = combineReducers({
    app,
    editor,
    routing: routerReducer
});

const middleWare = [thunk];

if(true || typeof process.env.LOG_ENABLE !== 'undefined') {
    middleWare.push(createLogger());
}


const initStore = (preload = {}) => {
    const store = createStore(reducer, preload, applyMiddleware(...middleWare));
    return store;
};

export default initStore;