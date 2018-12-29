import React from 'react';

import '../style.css';
import '../queries.css';
import '../normalize.css';
import '../grid.css';

import RepairBoard from './repairboard'

export default class WorkorderForm extends React.Component {
    render() {

        return (
            <section className="work-order">
                <div className="workorder-text-box">
                    <h2>Create a New Work Order</h2>
                    <input className="new-work-order" type="submit" value="Create Work Order" />
                </div>
                <div className="create-work-order">
                    <h2>Work Order Form</h2>
                    <form>
                        <input type="text" name="field1" className="field1 align-left" placeholder="User Name" />
                        <input type="text" name="field2" className="field2 align-left" placeholder="Case #" />
                        <div className="field3 field-full">
                                <label>Customer</label>
                                <select>
                                    <option value="Cust#1">Cust1</option>
                                    <option value="Cust#2">Cust2</option>
                                    <option value="Cust#3">Cust3</option>
                                </select>
                        </div>
                        <textarea name="field4" className="field-style" placeholder="Notes:" defaultValue={""}></textarea>
                    </form>
                    <RepairBoard repairs={this.props.repairs}/>
                    <input className="save-work-order" type="submit" value="Save Work Order" />
                </div>
            </section>
        )
    }
};
