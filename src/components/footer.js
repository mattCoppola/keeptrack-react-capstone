import React from 'react';

export default function Footer() {
    return (
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
    )
}
