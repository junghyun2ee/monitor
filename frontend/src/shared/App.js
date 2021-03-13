import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home } from '../pages';

import Viewer from '../components/Viewer';

class App extends Component {
    render () {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <hr />
                <Viewer />
            </div>
        );
    }
}

export default App;