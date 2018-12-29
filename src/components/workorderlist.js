import React from 'react';

import '../css/style.css';
import '../css/queries.css';
import '../css/normalize.css';
import '../css/grid.css';

export default class WorkorderList extends React.Component {
    render() {
        const rows = [];
        this.props.workorders.forEach((workorder) => {
            rows.push(
                <tr>
                <td>{workorder.createdBy}</td>
                <td>{workorder.dateCreated}</td>
                <td>{workorder.caseNo}</td>
                <td>{workorder.noOfItems}</td>
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
