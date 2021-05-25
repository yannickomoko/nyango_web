import React from 'react'
import ViewAbout from './view_about'; 


function About() {
    return(
         <>
            <div class="page-title-area item-bg2 jarallax" data-jarallax='{"speed": 0.3}'>
                <div class="container">
                    <div class="page-title-content">
                        <h2>About Us</h2>
                        <p>If you have an idea, we would love to hear about it.</p>
                    </div>
                </div>
            </div>

            <ViewAbout />
         </>
    )
}

export default About;