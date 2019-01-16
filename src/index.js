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

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
