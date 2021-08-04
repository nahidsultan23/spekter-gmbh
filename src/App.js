import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import history from './history';

import Home from './pages/home';
import PostDetails from './pages/postDetails';
import CreatePost from './pages/createPost';

function App() {
    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/posts/create" component={CreatePost} />
                    <Route path="/posts/:id" component={PostDetails} />
                    <Route path="/posts" component={Home} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
