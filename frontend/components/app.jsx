import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
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
            <ProtectedRoute exact path="/recent" component={NavBar} />
            <ProtectedRoute exact path="/all" component={NavBar} />
            <ProtectedRoute path="/friends/:friendId" component={NavBar} />
        </Switch>
    </div>
)

export default App;