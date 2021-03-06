import React from 'react'

function Section5() {
    return(
        <section class="app-download-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="app-image">
                            <div class="main-image">
                                <img src="assets/img/mobile-app1.png" class="wow fadeInLeft" data-wow-delay="0.6s" alt="image"/>
                                <img src="assets/img/mobile-app2.png" class="wow fadeInUp" data-wow-delay="0.9s" alt="image"/>
                            </div>

                            <div class="main-mobile-image">
                                <img src="assets/img/main-mobile.png" class="wow fadeInUp" data-wow-delay="0.6s" alt="image"/>
                            </div>

                            <div class="circle-img">
                                <img src="assets/img/circle.png" alt="image"/>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="app-download-content">
                            <h2>You can find all the thing you need to payout</h2>
                            <div class="bar"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

                            <div class="btn-box">
                                <a href="#" class="app-store-btn">
                                    <i class="flaticon-apple"></i>
                                    Download on
                                    <span>App Store</span>
                                </a>

                                <a href="#" class="play-store-btn">
                                    <i class="flaticon-play-store"></i>
                                    Download on
                                    <span>Google play</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Section5;