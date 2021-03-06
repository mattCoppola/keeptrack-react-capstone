import React from 'react';
import { connect } from 'react-redux';

import { submitWorkOrder, subtractInventory } from "../actions";

export class WorkorderForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isHidden: true
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.toggleHidden = this.toggleHidden.bind(this);
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const inputs = [
            this.username,
            this.caseNumber,
            this.customerName,
            this.serialNumber,
            this.partReplaced,
            this.notes
        ];

        const workorder = {
            username: this.username.value,
            caseNumber: this.caseNumber.value,
            customerName: this.customerName.value,
            serialNumber: this.serialNumber.value,
            partReplaced: this.partReplaced.value,
            notes: this.notes.value,
            dateCreated: Date.now()
        };
        this.props.dispatch(submitWorkOrder(workorder, this.props.authToken));
        this.props.dispatch(subtractInventory(workorder.partReplaced, this.props.authToken));
        inputs.map(input => (input.value = ""));
    }

    render() {
        {/* map inventory list for Select Part field in form */}
        const parts = [];
        this.props.parts.forEach(function(part) {
            parts.push(
                <option value={part._id}>{part.partNumber}</option>
            );
        });

        return (
            <section className="work-order">
                <div className="workorder-text-box">
                    <h2>Create a New Work Order</h2>
                    <ul> Instructions:
                        <li className="workorder-li">Click the button to open up a new workorder form.</li>
                        <li className="workorder-li">Enter all of your information and click save</li>
                        <li className="workorder-li">Once saved you can see your work order listed in the Completed Work Orders table below.</li>
                        <li className="workorder-li">The quantity of the inventory part you selected for repair is deducted from the Inventory table.</li>
                        <li className="workorder-li">You can also delete any workorder in the list by clicking the delete button in it's row.</li>
                    </ul>
                    <input onClick={this.toggleHidden} className="new-work-order" type="submit" value="Create Work Order" />
                </div>
                <div
                    className="create-work-order"
                    style={this.state.isHidden ? {display: 'none'} : null}
                >


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
                            <p className="form-description">Enter the item's serial number</p>
                            <input
                                type="text"
                                name="serialNumber"
                                label="Item Serial Number"
                                placeholder="Item Serial Number"
                                ref={input => (this.serialNumber = input)}
                            />
                            <label>Select Part</label>
                            <p className="form-description">Select the part repaired</p>
                            <select
                                className="select-part"
                                name="partReplaced"
                                label="Select Part"
                                type="select"
                                ref={input => (this.partReplaced = input)}
                            >
                                <option></option>
                                {parts}
                            </select>

                            <p className="form-description">Add additional notes about the Work Order</p>
                            <input
                                element="textarea"
                                label="Notes"
                                name="notes"
                                placeholder="Notes: "
                                ref={input => (this.notes = input)}

                            />

                            <button onClick={this.toggleHidden} className="save-work-order" type="submit" value="Save Work Order">Save </button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
};

const mapStateToProps = (state) => ({
    loggedIn: state.reducer.user,
    workorders: state.reducer.WORKORDERS,
    parts: state.reducer.inventory,
    authToken: state.reducer.authToken
});

export default connect(mapStateToProps)(WorkorderForm);
