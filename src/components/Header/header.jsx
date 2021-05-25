import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className="navbar-area">
            <div className="luvion-responsive-nav">
                <div className="container">
                    <div className="luvion-responsive-menu">
                        <div className="logo">
                            <a href="index.html">
                                <img src="assets/img/logo.png" alt="logo"/>
                                <img src="assets/img/black-logo.png" alt="logo"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="luvion-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <a className="navbar-brand" href="index.html">
                            <img src="assets/img/logo.png" alt="logo"/>
                            <img src="assets/img/black-logo.png" alt="logo"/>
                        </a>
                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>

                                <li className="nav-item">
                                     <Link to="/nyango/about" className="nav-link">About Us</Link> 
                                </li>

                                <li className="nav-item"><a href="#" className="nav-link">Movies</a>
                                     
                                </li>

                                <li className="nav-item"><a href="#" className="nav-link">Series TV</a>
                                     
                                </li>

                                <li className="nav-item">
                                    <a href="pricing.html" className="nav-link">Trending</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/nyango/contact" className="nav-link">Contact</Link>
                                </li>
                            </ul>

                            <div className="others-options">
                                <Link to="nyango/login" className="login-btn"><i className="flaticon-user"></i> Connexion</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;