import React from 'react';
import {reduxForm, Field} from 'redux-form';
import { Link } from 'react-router-dom';

export class Signup extends React.Component {
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

                            <section id="signup">
                            <div className="signup-wrapper">
                                <h3>Sign Up</h3>
                                <div className="signup-close">
                                    <Link to="/"><button>×</button></Link>
                                </div>
                                <div className="signup-form">
                                <form
                                onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
                                role="form" aria-live="assertive">
                                <fieldset>
                                    <legend>Signup Form</legend>
                                    <label htmlFor="signup-username">Username</label>
                                    <Field type="text" name="username" id="signup-username" placeholder="Enter Username" defaultValue="demo" component="input" required />
                                    <label htmlFor="signup-password">Password<span id="password-strength" /></label>
                                    <Field type="password" name="password" id="signup-password" placeholder="Enter Password" defaultValue="demo123" minLength={6} component="input" required />
                                    <label htmlFor="confirm-password">Confirm Password</label>
                                    <Field type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" defaultValue="demo123"  component="input" required />
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
//    render() {
//        return (
//            <section id="signup">
//                <div className="signup-wrapper">
//                    <h3>Sign Up</h3>
//                    <div className="signup-close">
//                        <button>×</button>
//                    </div>
//                    <div className="signup-form">
//                        <form
//                            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
//                            role="form" aria-live="assertive">
//                            <fieldset>
//                                <legend>Signup Form</legend>
//                                <label htmlFor="signup-username">Username</label>
//                                <Field type="text" name="username" id="signup-username" placeholder="Enter Username" defaultValue="demo" component="input" required />
//                                <label htmlFor="signup-password">Password<span id="password-strength" /></label>
//                                <Field type="password" name="password" id="signup-password" placeholder="Enter Password" defaultValue="demo123" minLength={6} component="input" required />
//                                <label htmlFor="confirm-password">Confirm Password</label>
//                                <Field type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" defaultValue="demo123"  component="input" required />
//                                <button type="submit" id="signup-button">Sign Up</button>
//                                <br />
//                                <br />
//                                <div className="change-form">Have an account? <a href id="change-form-login">Login</a></div>
//                            </fieldset>
//                        </form>
//                    </div>
//                </div>
//            </section>
//        );
//    };
//}

export default reduxForm({
    form: 'login'
})(Signup);
