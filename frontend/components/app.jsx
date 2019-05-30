import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Link, Route, Switch } from 'react-router-dom';
import Modal from './modal/modal';
import Splash from './splash';
import NewUserForm from './session/new_user_form_container';
import NavBar from './nav_bar/nav_bar_container';

const App = () => (
    <div>
        <Modal />
        <Switch>
            <AuthRoute exact path="/" component={Splash} />
            <AuthRoute exact path="/signup" component={NewUserForm} />
            <ProtectedRoute exact path="/dashboard" component={NavBar}/>
        </Switch>
    </div>
)

export default App;