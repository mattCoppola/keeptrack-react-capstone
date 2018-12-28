import React from 'react';

import '../style.css';
import '../queries.css';
import '../normalize.css';
import '../grid.css';

export default class AddPartsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        const value = this.state.value;
        if (value && this.props.onAdd) {
            this.props.onAdd(value);
        }
    }

    setEditing(editing) {
        this.setState({
            editing
        });
    }

    render() {
        if (!this.state.editing) {
            return (
                <div className="add-button"
                onClick={() => this.setEditing(true)}>
                <a href="#">Add a {this.props.type}...</a>
        </div>
        );
    }

        return (
            <form className="card add-form" onSubmit={(e) => this.onSubmit(e)}>

            {/*<label>Add Part</label>*/}
                <select value={this.state.value} onChange={this.handleChange} name="field5" class="field-full">
                    <option value=""></option>
                    <option value="Part#1">Part1</option>
                    <option value="Part#2">Part2</option>
                    <option value="Part#3">Part3</option>
                </select>

                <button>Add</button>
                <button type="button" onClick={() => this.setEditing(false)}>
                    Cancel</button>
            </form>
        );
    }
}
