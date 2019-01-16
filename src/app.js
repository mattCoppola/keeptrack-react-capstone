import React from "react";
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from './components/dashboard';
import Landing from './components/landing';
import Login from './components/login';
import Signup from './components/signup';
import WorkorderForm from './components/workorderform';
import Footer from './components/footer';

import './css/style.css';
import './css/queries.css';
import './css/normalize.css';
import './css/grid.css';

class App extends React.Component {
    render(){
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/auth/signup" component={Signup} />
                    <Route exact path="/auth/login" component={Login} />
                    <Route exact path="/workorderform" component={WorkorderForm} />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default connect()(App);
