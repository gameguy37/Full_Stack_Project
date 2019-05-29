import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Link, Route, Switch } from 'react-router-dom';
import UsersIndexContainer from './users/users_index_container';
import LoginForm from './session/login_form_container';
import NewUserForm from './session/new_user_form_container';
import Splash from './splash';

const App = () => (
    <div>

        <Switch>
            <Route exact path="/" component={Splash} />
            <Route exact path="/signup" component={NewUserForm} />
        </Switch>
    </div>
)

export default App;