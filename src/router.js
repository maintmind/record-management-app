import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Landing from './components/Landing/Landing';
import PhotoUploader from './components/PhotoUploader/PhotoUploader';
import UserInputForm from './components/UserInputForm/UserInputForm';
import Reminders from './components/Reminders/Reminders';


export default (
    <Switch>
        <Route exact path ="/" component={Landing} />
        <Route path ="/dashboard" component={Dashboard} />
        <Route path='/header' component={Header} />
        <Route path ="/photo" component={PhotoUploader} />
        <Route path ="/form" component={UserInputForm} />
        <Route path ="/addreminder" component={Reminders} />
    </Switch>
)
