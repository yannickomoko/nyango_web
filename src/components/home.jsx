import React from 'react'
import Section1 from './sections/section1';
import Section2 from './sections/section2';
import Section3 from './sections/section3';
import Section4 from './sections/section4';
import Section5 from './sections/section5';
import Section6 from './sections/section6';

function Home() {
    return( 
        <>
        <div class="main-banner jarallax" data-jarallax='{"speed": 0.3}'>
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="main-banner-content">
                            <h1>Easy, fee-free banking for entrepreneurs</h1>
                            <p>Get the financial tools and insights to start, build, and grow your business.</p>
                            <a href="#" class="btn btn-primary">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        </>
    )
}

export default Home;