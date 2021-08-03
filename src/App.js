import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import history from './history';

import Home from './pages/home';

function App() {
    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
