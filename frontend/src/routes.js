import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';

import NewContact from './pages/NewContact';
import Profile from './pages/Profile';
import UpdateProfile from './pages/UpdateProfile';
import SearchContact from './pages/SearchContact';
import UpdateContact from './pages/UpdateContact';

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" component={Register} />
            
            <Route path="/profile" component={Profile} />
            <Route path="/search" component={SearchContact} />
            <Route path="/contacts/new" component={NewContact} />
            <Route path="/update" component={UpdateProfile} />
            <Route path="/contact" component={UpdateContact} />
        </Switch>
        </BrowserRouter> 
    );
}