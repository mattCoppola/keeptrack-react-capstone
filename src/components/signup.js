import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import { signupUser } from "../actions";

export class Signup extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const inputs = [this.username, this.password, this.confirmPassword]
        // Validate User Input
        if (this.password.value !== this.confirmPassword.value) {
            alert('Passwords must match!');
        } else if (this.username.value === "") {
            alert('Please input a user name.');
        } else if (this.password.value === "") {
            alert('Please input a password.');
        } else {
            const user = {
                username: this.username.value,
                password: this.password.value,
                confirmPassword: this.confirmPassword.value
            };
            this.props.dispatch(signupUser(user));
            inputs.map(input => (input.value = ""));
            console.log(this.props.loggedIn);
            if (this.props.loggedIn) {
                return <Redirect to="/dashboard" />;
            }
        }
    }


    render() {
        console.log(this.props.loggedIn);
        if (this.props.loggedIn) {
            return <Redirect to="/dashboard" />;
        }
        return (
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

                            <section id="signup">
                            <div className="signup-wrapper">
                                <h3>Sign Up</h3>
                                <div className="signup-close">
                                    <Link to="/"><button>×</button></Link>
                                </div>
                                <div className="signup-form">
                                <form
                                onSubmit={this.onSubmit}
                                role="form" aria-live="assertive">
                                <fieldset>
                                    <legend>Signup Form</legend>
                                    <label htmlFor="signup-username">Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="signup-username" placeholder="Enter Username" defaultValue="demo"
                                        ref={input => (this.username = input)}
                                        autoFocus
                                    />
                                    <label htmlFor="signup-password">Password<span id="password-strength" /></label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="signup-password" placeholder="Enter Password" defaultValue="demo123"
                                        minLength={6}
                                        ref={input => (this.password = input)}

                                    />
                                    <label htmlFor="confirm-password">Confirm Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        id="confirmPassword" placeholder="Confirm Password" defaultValue="demo123"
                                        ref={input => (this.confirmPassword = input)}
                                    />
                                    <button type="submit" id="signup-button">Sign Up</button>
                                    <br />
                                    <br />
                                    <div className="change-form">Have an account? <Link to="/auth/login">Login</Link></div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </header>
        )
    }
}

const mapStateToProps = (state) => ({
    loggedIn: state.reducer.user
});


export default connect(mapStateToProps)(Signup);
