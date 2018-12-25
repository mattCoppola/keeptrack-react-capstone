//class ProductCategoryRow extends React.Component {
//    render() {
//        const category = this.props.category;
//        return (
//            <tr>
//            <th colSpan="2">
//            {category}
//            </th>
//            </tr>
//        );
//    }
//}

// header.js
    // signup
    // login
class Header extends React.Component {
    render() {
        <header id="home" role="banner">
            <nav role="navigation">
                <div className="row">
                    <h1 className="logo">Keeptrack - BETA</h1>
                    <ul className="main-nav">
                        <li className="signup"><a href="#">Sign Up</a></li>
                        <li className="login"><a href="#">Login</a></li>
                        <li className="hamburger"><a href="#"><i className="fas fa-bars" /></a></li>
                    </ul>
                </div>
            </nav>
            <div className="hero-text-box">
                <div className="hero-blur">
                    <h1>Repair Order and Inventory Management software that's easy to use</h1>
                </div>
                <a className="btn btn-full scroll" href="#learn-more">Learn More</a>
            </div>
        </header>
    }
}

class Login extends React.Component {
    render() {
        <section id="login">
            <div className="login-wrapper">
                <h3>Log in</h3>
                <div className="login-close">
                    <button>×</button>
                </div>
                <div className="login-form">
                    <form role="form" aria-live="assertive">
                        <fieldset>
                        <legend>Login Form</legend>
                        <label htmlFor="login-username">Username</label>
                        <input type="text" name="username" id="login-username" placeholder="Enter Username" defaultValue="demo" required />
                        <label htmlFor="login-password">Password</label>
                        <input type="password" name="password" id="login-password" placeholder="Enter Password" defaultValue="demo123" required />
                        <button type="submit" id="login-button">Log In</button>
                        <br />
                        <br />
                        <div className="change-form">Need to <a href id="change-form-signup">Signup</a> ?</div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </section>
    }
}

class Signup extends React.Component {
    render () {
        <section id="signup">
            <div className="signup-wrapper">
                <h3>Sign Up</h3>
                <div className="signup-close">
                    <button>×</button>
                </div>
                <div className="signup-form">
                    <form role="form" aria-live="assertive">
                        <fieldset>
                        <legend>Signup Form</legend>
                        <label htmlFor="signup-username">Username</label>
                        <input type="text" name="username" id="signup-username" placeholder="Enter Username" defaultValue="demo" required />
                        <label htmlFor="signup-password">Password<span id="password-strength" /></label>
                        <input type="password" name="password" id="signup-password" placeholder="Enter Password" defaultValue="demo123" minLength={6} required />
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" defaultValue="demo123" required />
                        <button type="submit" id="signup-button">Sign Up</button>
                        <br />
                        <br />
                        <div className="change-form">Have an account? <a href id="change-form-login">Login</a></div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </section>
    }
}

// workorder-list.js
class WorkorderList extends React.Component {
    render() {
        <div className="row">
            <div className="col span-1-of-2 work-orders-list">
                <h2>Completed Work Orders</h2>
                <table className="work-orders">
                    <tbody><tr>
                    <th>Created By</th>
                    <th>Date</th>
                    <th>Case #</th>
                    <th>No. of Items</th>
                    </tr>
                    <tr>
                    <td>Matt C</td>
                    <td>12/21/2018</td>
                    <td>SC1085629</td>
                    <td>4</td>
                    </tr>
                    <tr>
                    <td>Matt C</td>
                    <td>12/21/2018</td>
                    <td>SC1085629</td>
                    <td>4</td>
                    </tr>
                    <tr>
                    <td>Matt C</td>
                    <td>12/21/2018</td>
                    <td>SC1085629</td>
                    <td>4</td>
                    </tr>
                    <tr>
                    <td>Matt C</td>
                    <td>12/21/2018</td>
                    <td>SC1085629</td>
                    <td>4</td>
                    </tr>
                </tbody></table>
            </div>
        </div>
    }
}

// inventory-list.js
class InventoryList extends React.Component {
    render() {
        <div class="col span-1-of-2 inventory-levels">
            <h2>Current Inventory Levels</h2>
                <table class="inventory-table">
                <tr>
                <th>Part Number</th>
                <th>Cost</th>
                <th>Price</th>
                <th>Qty</th>
                </tr>
                <tr>
                <td>Main-board</td>
                <td>$290</td>
                <td>$350</td>
                <td>21</td>
                </tr>
                <tr>
                <td>Case</td>
                <td>$60</td>
                <td>$110</td>
                <td>100</td>
                </tr>
                <tr>
                <td>Function-brd</td>
                <td>$45</td>
                <td>$90</td>
                <td>33</td>
                </tr>
            </table>
        </div>
        </div>
    }
}

// workorder-form.js
    // repair-board
    // repair-item-card
    // parts-list
class WorkorderForm extends React.Component {
    render() {
                            <section className="work-order">
                            <div className="create-work-order">
                            <h2>Work Order Form</h2>
                        {/*        https://www.sanwebe.com/2014/08/css-html-forms-designs*/}
                            <form className="form-style-9">
                            <ul>
                            <li>
                            <input type="text" name="field1" className="field-style field-split align-left" placeholder="User Name" />
                            <input type="text" name="field2" className="field-style field-split align-right" placeholder="Case #" />
                            </li>
                            <li>
                            <label>Customer</label>
                            <select name="field4" className="field-full">
                            <option value="Cust#1">Cust#1</option>
                            <option value="Cust#2">Cust#2</option>
                            <option value="Cust#3">Cust#3</option>
                            </select>
                            </li>
                            <li>
                            <textarea name="field5" className="field-style" placeholder="Notes:" defaultValue={""} />
                            </li>
                            <div className="board">
                            <p>Repaired Items</p>
                            <ul className="lists">
                            <li className="list-wrapper">
                            <div>
                            <h3>Example Item</h3>
                            <ul className="list">
                            <li>
                            <div className="card">example part</div>
                            </li>
                            <li>
                            <div className="card">example part</div>
                            </li>
                            <li>
                            <div className="card">example part</div>
                            </li>
                            </ul>
                            </div>
                            </li>
                            <li className="add-list-wrapper">
                            {/*                <AddForm type="list" onAdd={title => this.addList(title)}/>*/}
                            <input type="submit" defaultValue="Add New Device" />
                            {/*   https://github.com/Thinkful-Ed/redux-trello-async-thunk/blob/master/client/src/components/list.js            */}
                            <div>
                            <p>Repaired Device Form</p>
                            <ul className="list">
                            <li>
                            {/*                         <AddForm type="card" onAdd={text => this.addCard(text)}/>*/}
                            <input type="submit" defaultValue="Add Parts" />
                            {/*    https://github.com/Thinkful-Ed/redux-trello-async-thunk/blob/master/client/src/components/card.js          */}
                            <div className="card">
                            </div></li><li>
                            <label>Parts List</label>
                            <select name="field5" className="field-full">
                            <option value="Part#1">Part#1</option>
                            <option value="Part#2">Part#2</option>
                            <option value="Part#3">Part#3</option>
                            </select>
                            </li>
        </ul></div>
            </li>
        </ul>
        </div>
        </ul>
        <ul className="lists">
            <li>
            <input type="submit" defaultValue="Save Work Order" />
                </li>
        </ul>
        </form></div>
            </section>

    }
}

// footer.js
class Footer extends React.Component {
    render() {
        <footer role="contentinfo">
            <a className="btn btn-full scroll" href="#home">Back to top</a>
            <div className="row">
                <a className="aboutUs" href="#">About Us</a>
                <ul className="social-links">
                <li><a href="https://github.com/mattCoppola" target="_blank"><i className="fab fa-github" /></a></li>
                <li><i className="fab fa-facebook" /></li>
                <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                <li><a href="#"><i className="fab fa-twitter" /></a></li>
                <li><a href="#"><i className="fab fa-instagram" /></a></li>
                </ul>
            </div>
        </footer>
    }
}
