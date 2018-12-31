import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import './css/style.css';
import './css/queries.css';
import './css/normalize.css';
import './css/grid.css';

//IMPORT APP FOR ROUTER / ROUTES
import App from './app';

import Landing from './components/landingpage';
import Footer from './components/footer';
import Dashboard from './components/dashboard';
import Signup from './components/signup';
import Login from './components/login';

ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
        <App />
        </React.Fragment>
    </Provider>,
    document.getElementById('root')
);

//<Landing />
//    <Dashboard workorders={WORKORDERS} inventory={INVENTORY} />
//        <Footer />

