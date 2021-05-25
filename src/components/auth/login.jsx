import { Container } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <Container>
            <div className="row m-0 bg-login">
                <div className="col-lg-6 col-md-12 p-5">
                    <div className="login-image"> 
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 p-0">
                    <div className="login-content">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="login-form">
                                    <div className="logo">
                                        <a href="#"><img src="assets/img/black-logo.png" alt="image"/></a>
                                    </div>
                                    <h3>Welcome to nyango App</h3>
                                    <p>New to nyango? <Link to="/register">Sign up</Link></p>

                                    <form>
                                        <div className="form-group">
                                        <input 
                                        type="email"
                                        name="email"
                                        id="email" 
                                        placeholder="Your email address" 
                                        className="form-control"/>
                                        </div>

                                        <div className="form-group">
                                        <input 
                                        type="password" 
                                        name="password" 
                                        id="password" 
                                        placeholder="Your password" 
                                        className="form-control"/>
                                        </div>
                                        <Link to="/nyango">
                                        <button type="submit" className="btn btn-primary">Login</button>
                                        </Link>
                                        <div className="forgot-password">
                                            <a href="#">Forgot Password?</a>
                                        </div>

                                        <div className="connect-with-social">
                                            <button type="submit" className="facebook"><i className="fab fa-facebook-square"></i> Connect with Facebook</button>
                                            <button type="submit" className="google"><i className="fab fa-google"></i> Connect with Google</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Login;