import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Landing from './components/Landing/Landing';
import UserInputForm from './components/UserInputForm/UserInputForm'


export default (
    <Switch>
        <Route exact path ="/" component={Landing} />
        <Route path ="/dashboard" component={Dashboard} />
        <Route path ="/form" component={UserInputForm} />
    </Switch>
)
