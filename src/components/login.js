import React from 'react';
import {reduxForm, Field} from 'redux-form';

export class Login extends React.Component {
    onSubmit(values) {
        console.log(values);
    }

    render() {
        return (
            <section id="login">
                <div className="login-wrapper">
                <h3>Log in</h3>
                    <div className="login-close">
                        <button>×</button>
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
                            <div className="change-form">Need to <a href id="change-form-signup">Signup</a> ?</div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default reduxForm({
    form: 'login'
})(Login);
