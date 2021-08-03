import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import history from './history';

function App() {
    return (
        <div className="App">
            <Router history={history}></Router>
        </div>
    );
}

export default App;
