import React from 'react';

export default class Login extends React.Component {
    render() {
        return (
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
        )
    }
}
