import React from 'react';

import '../css/style.css';
import '../css/queries.css';
import '../css/normalize.css';
import '../css/grid.css';

import List from './list';
import AddItemForm from './additemform';

export default class RepairBoard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lists: []
        };
    }

    addList(title) {
        this.setState({
            lists: [...this.state.lists, {title}]
        });
    }

    render() {
        const lists = this.state.lists.map((list, index) => (
            <li className="list-wrapper" key={index}>
            <List {...list} />
            </li>
        ));

        return (
            <div className="board">
                <h2>{this.props.title}</h2>
                <ul className="lists">
                    {lists}
                    <li className="add-list-wrapper">
                        <AddItemForm type="device" onAdd={text => this.addList(text)}/>
                    </li>
                </ul>
            </div>
        );
    }
}
