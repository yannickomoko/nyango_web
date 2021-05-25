import React from 'react'

function Section2() {
    return(
        <section className="services-area ptb-70">
            <div className="container-fluid p-0">
                <div className="overview-box">
                    <div className="overview-content">
                        <div className="content left-content">
                            <h2>Freelancers, entrepreneurs, and sole traders</h2>
                            <div className="bar"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <ul className="services-list">
                                <li><span><i className="flaticon-check-mark"></i> Free plan available</span></li>
                                <li><span><i className="flaticon-check-mark"></i> Full data privacy compliance</span></li>
                                <li><span><i className="flaticon-check-mark"></i> 100% transparent costs</span></li>
                                <li><span><i className="flaticon-check-mark"></i> Commitment-free</span></li>
                                <li><span><i className="flaticon-check-mark"></i> Real-time spending overview</span></li>
                                <li><span><i className="flaticon-check-mark"></i> Debit Mastercard included</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="overview-image">
                        <div className="image">
                            <img src="assets/img/1.png" alt="image" />

                            <div className="circle-img">
                                <img src="assets/img/circle.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    )
}

export default Section2;