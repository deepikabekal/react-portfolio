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
                <button className="btn btn-grad" id="resume-btn"><a href = {resumePDF} download = "DeepikeBekalResume.pdf">Download My Resume</a></button>
            </h2>         
        </div>
    )
}

export default Resume
