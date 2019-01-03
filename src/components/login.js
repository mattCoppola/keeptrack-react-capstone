import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginUser } from "../actions";

export class Login extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const inputs = [this.username, this.password]
        const user = {
            username: this.username.value,
            password: this.password.value,
        };
        this.props.dispatch(loginUser(user));
        inputs.map(input => (input.value = ""));
    }

    render() {
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
                    <section id="login">
                        <div className="login-wrapper">
                        <h3>Log in</h3>
                            <div className="login-close">
                                <Link to="/"><button>×</button></Link>
                            </div>
                            <div className="login-form">
                                <form
                                    onSubmit={this.onSubmit}
                                    role="form" aria-live="assertive">
                                    <fieldset>
                                        <legend>Login Form</legend>
                                        <label htmlFor="login-username">Username</label>
                                        <input
                                            type="text"
                                            name="username"
                                            id="login-username"
                                            placeholder="Enter Username" defaultValue="demo"
                                            ref={input => (this.username = input)}
                                        />
                                        <label htmlFor="login-password">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="login-password"
                                            placeholder="Enter Password" defaultValue="demo123"
                                            ref={input => (this.password = input)}
                                        />
                                        <button type="submit" id="login-button">Log In</button>
                                        <br />
                                        <br />
                                        <div className="change-form">Need to <Link to="/auth/signup">Signup</Link> ?</div>
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


export default connect(mapStateToProps)(Login);
