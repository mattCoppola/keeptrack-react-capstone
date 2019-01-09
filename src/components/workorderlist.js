import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

import { retrieveWorkOrders, deleteWorkOrder } from "../actions";

export class WorkorderList extends React.Component {
    constructor(props){
        super(props);
    }

   componentDidMount() {
       this.props.dispatch(retrieveWorkOrders());
   }

    render() {
   
        function handleClick() {
            alert('Invoice PDF stub...for future version of this application')
        }

        console.log(this.props.results);

        const rows = [];
        this.props.results.forEach(function(workorder, index) {
//            const numberOfPartsReplaced = workorder.partReplaced.length;
            rows.push(
                <tr key={index}>
                    <td>{workorder.username}</td>
                    <td>{workorder.customerName}</td>
                    <td>{workorder.created}</td>
                    <td><a href="#" onClick={handleClick}>{workorder.caseNumber}</a></td>
                    <td>
                        <button 
                            type="button"
                            id={workorder.id}
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
     results: state.reducer.workorders
});

export default connect(mapStateToProps)(WorkorderList);
