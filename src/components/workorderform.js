import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import {required, nonEmpty, email, matchInput} from '../validators';

import Input from './input';

import '../css/style.css';
import '../css/queries.css';
import '../css/normalize.css';
import '../css/grid.css';

import RepairBoard from './repairboard'

export class WorkorderForm extends React.Component {


    onSubmit(values) {
        alert(JSON.stringify(values))
    }

    render() {
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
                        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
                    >

                            <Field
                                type="text"
                                name="username"
                                label="User Name"
                                placeholder="User Name"
                                defaultValue="demo"
                                component={Input}
                                validate={[required, nonEmpty]}
                            />

                            <Field
                                type="text"
                                name="caseNumber"
                                label="Case #"
                                placeholder="Case #"
                                defaultValue="demo"
                                component={Input}
                                validate={[required, nonEmpty]}
                            />

                            <Field
                                type="text"
                                name="customerName"
                                label="Customer"
                                defaultValue="demo"
                                placeholder="Customer Name"
                                component={Input}
                                validate={[required, nonEmpty]}
                            />

                            <h2>Repaired Item</h2>
                            <Field
                                type="text"
                                name="serialNumber"
                                label="Item Serial Number"
                                defaultValue="demo"
                                placeholder="Item Serial Number"
                                component={Input}
                                validate={[required, nonEmpty]}
                            />
                            <label>Select Part</label>
                            <Field
                                name="partReplaced"
                                label="Select Part"
                                component="select"
                            >
                                <option></option>
                                <option value="motherboard">Motherboard</option>
                                <option value="functionboard">FunctionBrd</option>
                                <option value="screen">Screen</option>
                            </Field>

                            <Field
                                element="textarea"
                                label="Notes"
                                name="notes"
                                placeholder="Notes: "
                                defaultValue="demo"
                                component={Input}
                                validate={[required, nonEmpty]}
                            />


                        <input className="save-work-order" type="submit" value="Save Work Order" />
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

export default reduxForm({
    form: 'workorder'
})(WorkorderForm);
