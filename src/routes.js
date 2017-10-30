import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './app';
import Editor from './editor';

const Routes = 
    <Route path="/" component={App}>
        <IndexRoute component={Editor} ></IndexRoute>
    </Route>;

export default Routes;