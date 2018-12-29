import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import './css/style.css';
import './css/queries.css';
import './css/normalize.css';
import './css/grid.css';

import Landing from './components/landingpage';
import Footer from './components/footer';
import Dashboard from './components/dashboard';
import Signup from './components/signup';
import Login from './components/login';

const WORKORDERS = [
    {
        createdBy: 'Matt C',
        dateCreated: '12/26/2018',
        caseNo: 'SC1234567',
        noOfItems: 4
    },
    {
        createdBy: 'Johnny',
        dateCreated: '12/27/2018',
        caseNo: 'SC1234567',
        noOfItems: 4
    },
    {
        createdBy: 'Andy',
        dateCreated: '12/28/2018',
        caseNo: 'SC1234567',
        noOfItems: 4
    },
    {
        createdBy: 'Mark',
        dateCreated: '12/29/2018',
        caseNo: 'SC1234567',
        noOfItems: 4
    },
    {
        createdBy: 'Mark',
        dateCreated: '12/30/2018',
        caseNo: 'SC1234567',
        noOfItems: 4
    },
    {
        createdBy: 'Matt C',
        dateCreated: '12/31/2018',
        caseNo: 'SC1234567',
        noOfItems: 4
    },
    {
        createdBy: 'Matt C',
        dateCreated: '01/01/2019',
        caseNo: 'SC1234567',
        noOfItems: 4
    }
];

const INVENTORY = [
    {
        partNumber: 'main-board',
        cost: 290,
        price: 350,
        qty: 100
    },
    {
        partNumber: 'function',
        cost: 290,
        price: 350,
        qty: 100
    },
    {
        partNumber: 'button',
        cost: 290,
        price: 350,
        qty: 100
    },
    {
        partNumber: 'digitizer',
        cost: 290,
        price: 350,
        qty: 100
    },
    {
        partNumber: 'screen',
        cost: 290,
        price: 350,
        qty: 100
    },
    {
        partNumber: 'backcover',
        cost: 290,
        price: 350,
        qty: 100
    },
    {
        partNumber: 'screws',
        cost: 290,
        price: 350,
        qty: 100
    },
    {
        partNumber: 'creditreader',
        cost: 290,
        price: 350,
        qty: 100
    }
];


ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
            <Landing />
            <Footer />
            <Dashboard workorders={WORKORDERS} inventory={INVENTORY} />
            <Signup />
            <Login />
        </React.Fragment>
    </Provider>,
    document.getElementById('root')
);

