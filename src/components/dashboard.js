import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

import { logOutUser } from "../actions";

import WorkorderList from './workorderlist';
import InventoryList from './inventorylist';
import WorkorderForm from './workorderform';

import '../css/style.css';
import '../css/queries.css';
import '../css/normalize.css';
import '../css/grid.css';

import { retrieveWorkOrders } from "../actions";

export class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // componentDidMount() {
    //    this.props.dispatch(retrieveWorkOrders());
    // }

    handleClick(e) {
        e.preventDefault();
        this.props.dispatch(logOutUser());
    }

    render() {
        console.log(this.props.results);
        
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay;
        if (hours < 12) {
            timeOfDay = "morning";
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon";
        } else {
            timeOfDay = "evening";
        }

        let userName = this.props.user;

        return (
            <React.Fragment>
                    <nav id="home" className="dashboard-nav" role="navigation">
                        <div className="row">
                            <h1 className="logo">Keeptrack | Good {timeOfDay} {userName !== null ? this.props.user : 'USER'}
                        </h1>
                            <ul className="main-nav">
                            <li onClick={this.handleClick} className="login"><Link to="/" >Logout</Link></li>
                            </ul>
                        </div>
                    </nav>

                <div className="row dashboard">
                    <WorkorderList />
                    <InventoryList inventory = {this.props.inventory} />
                </div>
                <WorkorderForm />
            </React.Fragment>
        )
    }
};

const mapStateToProps = (state) => ({
    user: state.reducer.user,
    authToken: state.reducer.authToken,
    workorders: state.reducer.resultsOutput,
    results: state.reducer.resultsOutput
});

export default connect(mapStateToProps)(Dashboard);
