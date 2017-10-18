import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
import Header from './components/Header/Header';


export default (
    <Switch>
        <Route exact path ="/" component={Landing} />
        <Route path ="/dashboard" component={Dashboard} />
        <Route path='/header' component={Header} />
    </Switch>
)
