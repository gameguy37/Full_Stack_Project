import React from 'react';
import { Route, Switch } from 'react-router-dom';

const App = () => (
    <div>
        <h1>goDutch</h1>
        <Switch>
            <Route path="/" component={SplashPageContainer}/>
        </Switch>
    </div>
)

export default App;