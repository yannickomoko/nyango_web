import React from 'react'

function Footer() {
    return(
    <>
    <footer className="footer-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-sm-6 col-md-6">
                    <div className="single-footer-widget">
                        <div className="logo">
                            <a href="#"><img src="assets/img/black-logo.png" alt="logo"/></a>
                            <p>Quis ipsum suspendisse ultrices gravida commodo. Risus commodo veliliee vel viverra maecenas accumsan lacus vel facilisis.</p>
                        </div>
                        
                        <ul className="social-links">
                            <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-6">
                    <div className="single-footer-widget pl-5">
                        <h3>Company</h3>
                        
                        <ul className="list">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Our Pricing</a></li>
                            <li><a href="#">Latest News</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-6">
                    <div className="single-footer-widget">
                        <h3>Support</h3>
                        
                        <ul className="list">
                            <li><a href="#">FAQ's</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Condition</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-6">
                    <div className="single-footer-widget">
                        <h3>Address</h3>
                        
                        <ul className="footer-contact-info"> 
                            <li><span>Email:</span> <a href="#">info@nyangoapp.com</a></li>
                            <li><span>Phone:</span> <a href="#">(237) 699 053 526</a></li>
                            <li><span>Fax:</span> <a href="#">(237) 677 049 783</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="copyright-area">
                <p>Copyright @2021 <a href="#">Nyango App</a>. All rights reserved</p>
            </div>
        </div>
        
        <div className="map-image"><img src="assets/img/map.png" alt="map"/></div>
    </footer> 
    
    <div className="go-top"><i className="fas fa-arrow-up"></i></div>
    </>
    )
}

export default Footer;