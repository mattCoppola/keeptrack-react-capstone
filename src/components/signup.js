import React from 'react';

export default class Signup extends React.Component {
    render() {
        return (
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
        );
    };
}
