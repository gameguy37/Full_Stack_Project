import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UsersIndexContainer from './users/users_index_container';

const App = () => (
    <div>
        <h1>goDutch</h1>
        <UsersIndexContainer />
    </div>
)

export default App;