import React from 'react';

import '../style.css';
import '../queries.css';
import '../normalize.css';
import '../grid.css';

export default function Card(props) {
    return (
        <div className="card">
        <button className="card-edit">Edit</button>
        {props.text}
        </div>
    );
};

Card.defaultProps = {
    text: ''
};
