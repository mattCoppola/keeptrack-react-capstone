import React from 'react';

import '../style.css';
import '../queries.css';
import '../normalize.css';
import '../grid.css';

import Card from './card';
import AddPartsForm from './addpartsform';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    addCard(text) {
        this.setState({
            cards: [...this.state.cards, {
                text
            }]
        });
    }

    render() {
        const cards = this.state.cards.map((card, index) =>
            <li key={index}>
               <Card {...card} />
             </li>
            );
        return (
            <div>
                <button className="list-edit">Edit</button>
                <h3>{this.props.title}</h3>
                <ul className="list">
                    {cards}
                    <li>
                        <AddPartsForm type="part" onAdd={text => this.addCard(text)}/>
                    </li>
                </ul>
            </div>
        );
    }
}
