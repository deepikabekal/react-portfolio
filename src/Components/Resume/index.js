import React from 'react'
import BackEndList from './BackEndList'
import FrontEndList from './FrontEndList'
import resumePDF from '../../assets/files/resume.pdf'

const Resume = () => {
    return (
        <div>
            <h1>Resume</h1>
            <h2>
                <a href = {resumePDF} download = "DeepikeBekalResume.pdf">Download Resume</a>
            </h2>
            <FrontEndList></FrontEndList>
            <BackEndList></BackEndList>
        </div>
    )
}

export default Resume
