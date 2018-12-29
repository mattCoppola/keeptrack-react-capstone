import React from 'react';

import '../css/style.css';
import '../css/queries.css';
import '../css/normalize.css';
import '../css/grid.css';

export default class AddItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }

    onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        if (text && this.props.onAdd) {
            this.props.onAdd(text);
        }
        this.textInput.value = '';
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
                <input type="text" placeholder="Add a Device..." ref={input => this.textInput = input} />
                <button>Add</button>
                <button type="button" onClick={() => this.setEditing(false)}>Cancel</button>
            </form>
        );
    }
}
