import React from 'react';
import {connect} from 'react-redux';
// import { Redirect } from 'react-router-dom';

import { retrieveWorkOrders, deleteWorkOrder } from "../actions";

export class WorkorderList extends React.Component {
    constructor(props){
        super(props);
        this.deleteWO = this.deleteWO.bind(this);
    }

   componentDidMount() {
       this.props.retrieveWorkOrders(this.props.authToken);
   }

   deleteWO(target) {
     this.props.deleteWorkOrder(target.id, this.props.authToken);
   }

    render() {
        function handleClick() {
            alert('Invoice PDF stub...for future version of this application')
        }
        // console.log(this.props.results);
        const rows = [];
        // to call global this inside of render you must use ES6 arrow function
        const results = this.props.results;
        results.forEach((workorder, index) => {
            rows.push(
                <tr key={index}>
                    <td>{workorder.username}</td>
                    <td>{workorder.customerName}</td>
                    <td>{workorder.created}</td>
                    <td><a href="#" onClick={handleClick}>{workorder.caseNumber}</a></td>
                    <td>
                        <button
                            type="button"
                            id={workorder._id}
                            onClick={e => this.deleteWO(e.currentTarget)}
                        >
                        Delete
                        </button>
                    </td>
                </tr>
            )
    });

        return (
                <div className="col span-1-of-2 work-orders-list">
                    <h2>Completed Work Orders</h2>
                    <table className="work-orders">
                        <thead>
                            <tr>
                                <th>Created By</th>
                                <th>Customer</th>
                                <th>Date</th>
                                <th>Case No.</th>
                                <th className="delete-th">Delete</th>
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </table>
                </div>
        )
    }
};

const mapStateToProps = (state) => ({
     results: state.reducer.workorders,
     authToken: state.reducer.authToken
});

export default connect(mapStateToProps, {retrieveWorkOrders, deleteWorkOrder})(WorkorderList);
