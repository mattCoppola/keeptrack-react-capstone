import React from 'react';

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


import '../style.css';
import '../queries.css';
import '../normalize.css';
import '../grid.css';

export default class Dashboard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="row dashboard">
                    <WorkorderList workorders = {this.props.workorders} />
                    <InventoryList inventory = {this.props.inventory} />
                </div>
                <WorkorderForm />
            </React.Fragment>
        )
    }
};

