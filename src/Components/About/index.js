import React from 'react';
import AboutHeader from './AboutHeader'
import AboutContent from './AboutContent';
import AboutImage from './AboutImage';

const About = () => {
    return (        
        <section class="about">
            <AboutHeader />
            {/* <div id = "about-content"> */}
                <AboutContent />  
                <AboutImage />
            {/* </div> */}
            

        </section>          
    )
}

export default About
