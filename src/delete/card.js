import React from 'react';

import '../css/style.css';
import '../css/queries.css';
import '../css/normalize.css';
import '../css/grid.css';

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
