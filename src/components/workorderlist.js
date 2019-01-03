import React from 'react';
import {connect} from 'react-redux';

import '../css/style.css';
import '../css/queries.css';
import '../css/normalize.css';
import '../css/grid.css';

export class WorkorderList extends React.Component {
    render() {
        const rows = [];
        this.props.workorders.forEach(function(workorder) {
            const numberOfPartsReplaced = workorder.partReplaced.length;
            rows.push(
                <tr>
                    <td>{workorder.username}</td>
                    <td>{workorder.customerName}</td>
                    <td>{workorder.dateCreated}</td>
                    <td>{workorder.caseNumber}</td>
                    <td>{numberOfPartsReplaced}</td>
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
                                <th>No. of Items</th>
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </table>
                </div>
        )
    }
};

const mapStateToProps = (state) => ({
    workorders: state.reducer.WORKORDERS
});

export default connect(mapStateToProps)(WorkorderList);
