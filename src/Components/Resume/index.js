import React from 'react'
import BackEndList from './BackEndList'
import FrontEndList from './FrontEndList'
import resumePDF from '../../assets/files/resume.pdf'

const Resume = () => {
    return (
        <div id="resume">
            <h3>Resume</h3>
            <div id="icon-list">
                <FrontEndList></FrontEndList>
                <BackEndList></BackEndList>
            </div>   
            <h4>
                <a href = {resumePDF} download = "DeepikeBekalResume.pdf"><button className="btn btn-grad" id="resume-btn">Download My Resume</button></a>
            </h4>         
        </div>
    )
}

export default Resume
