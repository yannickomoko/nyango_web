import { Container } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

function Register() {
    return(
        <Container>
            <div class="row m-0">
                <div class="col-lg-6 col-md-12 p-5">
                    <div class="signup-image">
                        <img src="assets/img/signup-bg.jpg" alt="image" />
                    </div>
                </div>

                <div class="col-lg-6 col-md-12 p-0">
                    <div class="signup-content">
                        <div class="d-table">
                            <div class="d-table-cell">
                                <div class="signup-form">
                                    <div class="logo">
                                        <a href="index.html"><img src="assets/img/black-logo.png" alt="image" /></a>
                                    </div>

                                    <h3>Open your Nyango Account now</h3>
                                    <p>Already signed up? <Link to="/">Log in</Link></p>

                                    <form>
                                        <div class="form-group">
                                            <input type="text" name="name" id="name" placeholder="Your name" class="form-control"/>
                                        </div>

                                        <div class="form-group">
                                            <input type="email" name="email" id="email" placeholder="Your email address" class="form-control"/>
                                        </div>

                                        <div class="form-group">
                                            <input type="text" name="phone" id="phone" placeholder="Your Phone" class="form-control"/>
                                        </div>

                                        <div class="form-group">
                                            <input type="password" name="password" id="password" placeholder="Create a password" class="form-control"/>
                                        </div>

                                        <div class="form-group">
                                            <input type="password" name="confirpassword" id="confirpassword" placeholder="Confirm password" class="form-control"/>
                                        </div>

                                        <button type="submit" class="btn btn-primary">Sign Up</button>
                                         
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

export default Register;