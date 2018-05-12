import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import ExpandedMenuApp from './components/expandedMenuApp';
import ExpandedMenuWelcome from './components/expandedMenuWelcome';
import App from './components/app'
ReactDOM.render(
        <Router>
            <ExpandedMenuApp/>
        </Router>,
        // <App/>,
    document.getElementById('root')
);
