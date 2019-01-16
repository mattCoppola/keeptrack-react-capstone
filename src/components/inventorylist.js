import React from 'react';
import {connect} from 'react-redux';

// import '../css/style.css';
// import '../css/queries.css';
// import '../css/normalize.css';
// import '../css/grid.css';

import { retrieveInventory } from "../actions";

export class InventoryList extends React.Component {
    // constructor(props){
    //     super(props);
    // }

   componentDidMount() {
       this.props.dispatch(retrieveInventory(this.props.inventory, this.props.authToken));
   }

    render() {
        // console.log(this.props.inventory);
        const rows = [];
        this.props.inventory.forEach((item) => {
            rows.push(
                <tr key={item._id}>
                <td>{item.partNumber}</td>
                <td>{item.cost}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                </tr>
            )
        });

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

const mapStateToProps = (state) => ({
    inventory: state.reducer.inventory,
    authToken: state.reducer.authToken
});

export default connect(mapStateToProps)(InventoryList);
