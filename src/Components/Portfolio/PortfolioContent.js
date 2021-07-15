import React from 'react';
import ProjectContainer from './ProjectContainer';

const PortfolioContent = () => {
    const projectList = [
        {
            name : 'Run-Buddy',
            description : "Some description",
            tech : ['React', 'HTML', 'SQL'],
            photo : '../../assets/images/run-buddy.jpg'
        },
        {
            name : 'Horiseon',
            description : "Some description",
            tech : ['React', 'HTML', 'SQL'],
            photo : '../../assets/images/Horiseon.png'
        }
    ]
    return (
        <div className="row row-cols-1 row-cols-md-3">
                <ProjectContainer />
        </div>
    )
}

export default PortfolioContent
