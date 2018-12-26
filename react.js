import React from 'react';


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
                <input type="text" ref={input => this.textInput = input} />
                <button>Add</button>
                <button type="button" onClick={() => this.setEditing(false)}>Cancel</button>
            </form>
        );
    }
}

export default function Card(props) {
    return (
        <div className="card">
        {props.text}
        </div>
    );
};

Card.defaultProps = {
    text: ''
};

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

List.defaultProps = {
    title: ''
};


class RepairBoard extends React.Component {
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

Board.defaultProps = {
    title: 'Board'
};

}

class WorkorderForm extends React.Component {
 render() {

    return (
        <section className="work-order">
            <div className="create-work-order">
                <h2>Work Order Form</h2>
                <form className="form-style-9">
                    <ul>
                        <li>
                            <input type="text" name="field1" className="field-style field-split align-left" placeholder="User Name" />
                            <input type="text" name="field2" className="field-style field-split align-right" placeholder="Case #" />
                        </li>
                        <li>
                            <label>Customer</label>
                            <select name="field4" className="field-full">
                            <option value="Cust#1">Cust1</option>
                            <option value="Cust#2">Cust2</option>
                            <option value="Cust#3">Cust3</option>
                            </select>
                        </li>
                        <li>
                            <textarea name="field5" className="field-style" placeholder="Notes:" defaultValue={""} />
                        </li>
                    </ul>
                </form>
            </div>
            <RepairBoard repairs={this.props.repairs}/>
        </section>
    )
 }
};

class InventoryList extends React.Component {
    render() {
        const rows = [];
        this.props.inventory.forEach((item) => {
           rows.push(
               <tr>
               <td>{item.partNumber}</td>
               <td>{item.cost}</td>
               <td>{item.price}</td>
               <td>{item.qty}</td>
               </tr>
           )
        });
        return (
            <div className="col  span-1-of-2 inventory-levels">
                <h2>Current Inventory Levels</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Part Number</th>
                            <th>Cost</th>
                            <th>Price</th>
                            <th>Qty</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
            </div>
        )
    }
};

class WorkorderList extends React.Component {
    render() {
        const rows = [];
        this.props.workorders.forEach((workorder) => {
            rows.push(
                <tr>
                    <td>{workorder.createdBy}</td>
                    <td>{workorder.dateCreated}</td>
                    <td>{workorder.caseNo}</td>
                    <td>{workorder.noOfItems}</td>
                </tr>
            )
        });

        return (
            <div className="row">
                <div className="col  span-1-of-2 work-orders-list">
                    <h2>Completed Work Orders</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Created By</th>
                            <th>Date</th>
                            <th>Case No.</th>
                            <th>No. of Items</th>
                        </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </table>
                </div>
        )
    }
};

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <WorkorderList workorders=this.props.workorders />
                <InventoryList inventory = this.props.inventory />
                <WorkorderForm />
            </div>
        )
    }
};


ReactDOM.render(
    <Dashboard workorders={WORKORDERS} inventory={INVENTORY}/>,
    document.getElementById('container')
);

const WORKORDERS = [
    {
        createdBy: 'Matt C',
        dateCreated: '12/26/2018',
        caseNo: 'SC1234567',
        noOfItems: 4
    },
    {
        createdBy: 'Matt C',
        dateCreated: '12/26/2018',
        caseNo: 'SC1234567',
        noOfItems: 4
    },
    {
        createdBy: 'Matt C',
        dateCreated: '12/26/2018',
        caseNo: 'SC1234567',
        noOfItems: 4
    },
    {
        createdBy: 'Matt C',
        dateCreated: '12/26/2018',
        caseNo: 'SC1234567',
        noOfItems: 4
    },
    {
        createdBy: 'Matt C',
        dateCreated: '12/26/2018',
        caseNo: 'SC1234567',
        noOfItems: 4
    },
    {
        createdBy: 'Matt C',
        dateCreated: '12/26/2018',
        caseNo: 'SC1234567',
        noOfItems: 4
    },
    {
        createdBy: 'Matt C',
        dateCreated: '12/26/2018',
        caseNo: 'SC1234567',
        noOfItems: 4
    }
];

const INVENTORY = [
    {
        partNumber: 'main-board',
        cost: 290,
        price: 350,
        qty: 100
    },
    {
        partNumber: 'function',
        cost: 290,
        price: 350,
        qty: 100
    },
    {
        partNumber: 'button',
        cost: 290,
        price: 350,
        qty: 100
    },
    {
        partNumber: 'digitizer',
        cost: 290,
        price: 350,
        qty: 100
    },
    {
        partNumber: 'screen',
        cost: 290,
        price: 350,
        qty: 100
    },
    {
        partNumber: 'backcover',
        cost: 290,
        price: 350,
        qty: 100
    },
    {
        partNumber: 'screws',
        cost: 290,
        price: 350,
        qty: 100
    },
    {
        partNumber: 'creditreader',
        cost: 290,
        price: 350,
        qty: 100
    }
];
