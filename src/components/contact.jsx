import React from 'react'
import ViewContact from './view_contact';


function Contact() {
    return(
        <>
        <div class="page-title-area item-bg2 jarallax" data-jarallax='{"speed": 0.3}'>
            <div class="container">
                <div class="page-title-content">
                    <h2>Contact</h2>
                    <p>If you have an idea, we would love to hear about it.</p>
                </div>
            </div>
        </div>
        <ViewContact />
        </>
    )
}

export default Contact;