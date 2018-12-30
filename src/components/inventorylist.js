import React from 'react';

import '../css/style.css';
import '../css/queries.css';
import '../css/normalize.css';
import '../css/grid.css';

export default class InventoryList extends React.Component {
    render() {
        const rows = [];
//        this.props.inventory.forEach((item) => {
//            rows.push(
//                <tr>
//                <td>{item.partNumber}</td>
//                <td>{item.cost}</td>
//                <td>{item.price}</td>
//                <td>{item.qty}</td>
//                </tr>
//            )
//        });
        return (
            <div className="col span-1-of-2 inventory-levels">
                <h2>Current Inventory Levels</h2>
                    <table className="inventory-table">
                        <thead>
                            <tr>
                                <th>Part Number</th>
                                <th>Cost</th>
                                <th>Price</th>
                                <th>Qty</th>
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </table>
            </div>
        )
    }
};
