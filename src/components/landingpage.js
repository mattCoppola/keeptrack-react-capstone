import React from 'react';
import {connect} from 'react-redux';
import { Link, Redirect } from "react-router-dom";

import {learnMore} from '../actions';

import tools from '../css/images/tools.jpg';
import inventory from '../css/images/inventory.jpg';
import data from '../css/images/data.jpg'

import '../css/style.css';
import '../css/queries.css';
import '../css/normalize.css';
import '../css/grid.css';

export class Landing extends React.Component {
    render() {
        return (
            <div>
                <header id="home" role="banner">
                    <nav role="navigation">
                        <div className="row">
                            <h1 className="logo">Keeptrack - BETA</h1>
                            <ul className="main-nav">
                                <li className="signup">
                                    <Link to="/auth/signup">Sign Up</Link>
                                </li>
                                <li className="login">
                                    <Link to="/auth/login">Login</Link>
                                </li>
                                <li className="hamburger"><a href="#"><i className="fas fa-bars" /></a></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="hero-text-box">
                        <div className="hero-blur">
                            <h1>Repair Order and Inventory Management software that's easy to use</h1>
                        </div>
                        <a onClick={() => this.props.dispatch(learnMore())} className="btn btn-full scroll" href="#next-steps">Learn More</a>
                    </div>
                </header>
                <section id="next-steps" className="next-steps">
                    <h2>Easy to use features </h2>
                    <div className="row">
                        <div className="col span-1-of-3 box">
                            <img src={tools} alt="tools" />
                            <h3>Work Order Creation</h3>
                            <p className="long-copy">Create a work order with ease! Users can fill out a simple form with the ability to add multiple repaired devices, and selecting parts used for the repair</p>
                        </div>
                        <div className="col span-1-of-3 box">
                            <img src={inventory} alt="inventory" />
                            <h3>Inventory Management</h3>
                            <p className="long-copy">A real time snapshot of your current inventory, allows all users the ability to see what repair parts are in stock, making reordering items a breeze.</p>
                        </div>
                        <div className="col span-1-of-3 box">
                            <img src={data} alt="data" />
                            <h3>Real Time Updates</h3>
                            <p className="long-copy">Up to date metrics provides your team with current results. In a results based industry, you will always know if you are acheiving your goals. </p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    hello: state.hello
})

export default connect(mapStateToProps)(Landing);
