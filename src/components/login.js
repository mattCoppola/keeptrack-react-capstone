import React from 'react';
import {reduxForm, Field} from 'redux-form';
import { Link } from 'react-router-dom';

export class Login extends React.Component {
    onSubmit(values) {
        console.log(values);
    }

    render() {
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
                                    onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
                                    role="form" aria-live="assertive">
                                    <fieldset>
                                    <legend>Login Form</legend>
                                    <label htmlFor="login-username">Username</label>
                                    <Field type="text" name="username" id="login-username" placeholder="Enter Username" defaultValue="demo" component="input" required />
                                    <label htmlFor="login-password">Password</label>
                                    <Field type="password" name="password" id="login-password" placeholder="Enter Password" defaultValue="demo123" component="input" required />
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

export default reduxForm({
    form: 'login'
})(Login);
