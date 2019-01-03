import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { submitWorkOrder } from "../actions";

//import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
//import {required, nonEmpty, email, matchInput} from '../validators';

//import Input from './input';

//import '../css/style.css';
//import '../css/queries.css';
//import '../css/normalize.css';
//import '../css/grid.css';

import RepairBoard from './repairboard'

export class WorkorderForm extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const inputs = [this.username, this.caseNumber, this.customerName, this.serialNumber, this.partReplaced, this.notes]
        const workorder = {
            username: this.username.value,
            caseNumber: this.caseNumber.value,
            customerName: this.customerName.value,
            serialNumber: this.serialNumber.value,
            partReplaced: this.partReplaced.value,
            notes: this.notes.value
        };
        this.props.dispatch(submitWorkOrder(workorder));
        inputs.map(input => (input.value = ""));
        console.log(workorder);
    }

    render() {
        console.log(this.props.workorders);
        return (
            <section className="work-order">
                <div className="workorder-text-box">
                <h2>Create a New Work Order</h2>
                    <input className="new-work-order" type="submit" value="Create Work Order" />
                    </div>
                    <div className="create-work-order">
                    <h2>Work Order Form</h2>
                    <div className="workorder-form">
                    <form
                        onSubmit={this.onSubmit}
                    >

                            <input
                                type="text"
                                name="username"
                                label="User Name"
                                placeholder="User Name"
                                ref={input => (this.username = input)}
                            />

                            <input
                                type="text"
                                name="caseNumber"
                                label="Case #"
                                placeholder="Case #"
                                ref={input => (this.caseNumber = input)}
                            />

                            <input
                                type="text"
                                name="customerName"
                                label="Customer"
                                placeholder="Customer Name"
                                ref={input => (this.customerName = input)}
                            />

                            <h2>Repaired Item</h2>
                            <input
                                type="text"
                                name="serialNumber"
                                label="Item Serial Number"
                                placeholder="Item Serial Number"
                                ref={input => (this.serialNumber = input)}
                            />
                            <label>Select Part</label>
                            <select
                                name="partReplaced"
                                label="Select Part"
                                type="select"
                                ref={input => (this.partReplaced = input)}
                            >
                                <option></option>
                                <option value="motherboard">Motherboard</option>
                                <option value="functionboard">FunctionBrd</option>
                                <option value="screen">Screen</option>
                            </select>

                            <input
                                element="textarea"
                                label="Notes"
                                name="notes"
                                placeholder="Notes: "
                                ref={input => (this.notes = input)}

                            />

                        <button className="save-work-order" type="submit" value="Save Work Order">Save </button>
                        </form>
                        </div>
                </div>
            </section>
        )


//        return (
//            <section className="work-order">
//                <div className="workorder-text-box">
//                    <h2>Create a New Work Order</h2>
//                    <input className="new-work-order" type="submit" value="Create Work Order" />
//                </div>
//                <div className="create-work-order">
//                    <h2>Work Order Form</h2>
//                    <form>
//                        <input type="text" name="field1" className="field1 align-left" placeholder="User Name" />
//                        <input type="text" name="field2" className="field2 align-left" placeholder="Case #" />
//                        <div className="field3 field-full">
//                                <label>Customer</label>
//                                <select>
//                                    <option value="Cust#1">Cust1</option>
//                                    <option value="Cust#2">Cust2</option>
//                                    <option value="Cust#3">Cust3</option>
//                                </select>
//                        </div>
//                        <textarea name="field4" className="field-style" placeholder="Notes:" defaultValue={""}></textarea>
//                    </form>
//                    <RepairBoard repairs={this.props.repairs}/>
//                    <input className="save-work-order" type="submit" value="Save Work Order" />
//                </div>
//            </section>
//        )
    }
};

const mapStateToProps = (state) => ({
    loggedIn: state.reducer.user,
    workorders: state.reducer.WORKORDERS
});


export default connect(mapStateToProps)(WorkorderForm);
