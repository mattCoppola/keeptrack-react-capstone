import React from 'react';
import {connect} from 'react-redux';

import { backToTop } from '../actions';

export class Footer extends React.Component {
    render() {
        return (
            <footer role="contentinfo">
                <a onClick={() => this.props.backToTop} className="btn btn-full scroll" href="#home">Back to top</a>
                <div className="row">
                    <a className="aboutUs" href="/">About Us</a>
                    <ul className="social-links">
                        <li><a href="https://github.com/mattCoppola" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /></a></li>
                        <li><i className="fab fa-facebook" /></li>
                        <li><a href="/"><i className="fab fa-linkedin-in" /></a></li>
                        <li><a href="/"><i className="fab fa-twitter" /></a></li>
                        <li><a href="/"><i className="fab fa-instagram" /></a></li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default connect(null, {backToTop})(Footer);
