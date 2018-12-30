import React from 'react';

import { Link } from "react-router-dom";

import WorkorderList from './workorderlist';
import InventoryList from './inventorylist';
import WorkorderForm from './workorderform';

//export default class Dashboard extends React.Component {
//
//    render() {
//
//        return (
//            <div>
//                <h1>Hello World!</h1>
//            </div>
//        );
//    };
//}


import '../css/style.css';
import '../css/queries.css';
import '../css/normalize.css';
import '../css/grid.css';

export default class Dashboard extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <nav className="dashboard-nav" role="navigation">
                        <div className="row">
                            <h1 className="logo">Keeptrack - BETA</h1>
                            <ul className="main-nav">
                                <li className="login"><Link to="/" >Logout</Link></li>
                            </ul>
                        </div>
                    </nav>

                <div className="row dashboard">
                    <WorkorderList workorders = {this.props.workorders} />
                    <InventoryList inventory = {this.props.inventory} />
                </div>
                <WorkorderForm />
            </React.Fragment>
        )
    }
};

