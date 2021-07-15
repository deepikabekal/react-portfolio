import React from 'react'
import BackEndList from './BackEndList'
import FrontEndList from './FrontEndList'
import resumePDF from '../../assets/files/resume.pdf'

const Resume = () => {
    return (
        <div id="resume">
            {/* <h1>Resume</h1> */}
            <div id="icon-list">
                <FrontEndList></FrontEndList>
                <BackEndList></BackEndList>
            </div>   
            <h2>
                <a href = {resumePDF} download = "DeepikeBekalResume.pdf"><button className="btn btn-grad" id="resume-btn">Download My Resume</button></a>
            </h2>         
        </div>
    )
}

export default Resume
