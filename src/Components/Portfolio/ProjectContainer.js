import React from 'react';


const ProjectContainer = () => {
    const projectList = [
        {
            name : 'Horiseon',
            description : "A website for a marketing agency called Horiseon, that offers services like Search Engine Optimization, Online Reputation Management and Social Media Marketing.",
            tech : "HTML, CSS",
            imageName : 'Horiseon.png',
            webpage : "https://deepikabekal.github.io/Horiseon/",
            github : "https://github.com/deepikabekal/Horiseon"
        },
        {
            name : 'Weather Dashboard',
            description : "The application provides the weather details and the 5-day forecast for the city that the user enters in the search field. It also lists the city names in the search history.",
            tech : "HTML, CSS, Javascript",
            imageName : 'Weather.png',
            webpage : "https://deepikabekal.github.io/Weather-Dashboard/.",
            github : "https://github.com/deepikabekal/Weather-Dashboard"

        },
        {
            name : 'Work Day Scheduler',
            description : "A work day scheduler that allows the user to add tasks/events for each hour (9am-5pm). This application allows the user to manage time effectively.",
            tech : "HTML, CSS, Javascript/JQuery, Moment.js",
            imageName : 'scheduler.png',
            webpage : "https://deepikabekal.github.io/Work-Day-Scheduler/",
            github : "https://github.com/deepikabekal/Work-Day-Scheduler"
        },
        {
            name : 'Covid Now',
            description : "Covid-Now is an application that provides Covid-19 information and latest Covid-19 news for the country that the user will enter in the Search box. (Collaborative project)",
            tech : "HTML, CSS, Javascript, Jquery, Server side API",
            imageName : 'covid-now.jpg',
            webpage : "https://deepikabekal.github.io/covid-now-version2/",
            github : "https://github.com/deepikabekal/covid-now-version2"
        },
        {
            name : 'Code Quiz',
            description : "An interesting code quiz application with brain teasing questions on programming concepts.",
            tech : "HTML, CSS, Javascript, Jquery, Web API",
            imageName : 'code-quiz.jpg',
            webpage : "https://deepikabekal.github.io/Code-Quiz/",
            github : "https://github.com/deepikabekal/Code-Quiz"
        },
        {
            name : 'Live The Outdoors',
            description : "An application where the user browse through various nature trails. User can get details about the selected trail and find the embedded Google Maps for it. User can also add trails to favorites and mark them as completed. (collaborative project)",
            tech : "Bootstrap/CSS, Javascript/JQuery, Node.js, Express.js, Sequelize/SQL, Bcrypt, Connect-session-sequelize, Express Session",
            imageName : 'live-out-doors.png',
            webpage : "https://vast-retreat-28547.herokuapp.com/",
            github : "https://github.com/luluvann/live-the-outdoors"
        },
        {
            name : 'The Community Gallery',
            description : "An application that will feature unique paintings, sculptures, mosaics, prints, crafts, photographs etc created by the various artists (collaborative project).",
            tech : "React, Express.js, MongoDB/Mongoose, Node.js, GraphQL, Apollo Server, Apollo Client, Cloudinary Client, JWT, Bcrypt",
            imageName : 'tcg.png',
            webpage : "https://cryptic-thicket-25855.herokuapp.com/",
            github : "https://github.com/deepikabekal/TCG"
        },
    ];


    return (
            <>
                {projectList.map((item) => (
                    <div class="col mb-4" id="card-box" key={item.name}>
                        <div className="card h-100">
                            <a href= {item.webpage} target="_blank">
                                <img src={require(`../../assets/images/${item.imageName}`).default} className="image img-thumbnail" alt="project example"/>
                            </a>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text">{item.tech}</p>
                                <a href={item.github} target="_blank"><i className="fab fa-github card-git fa-2x"></i></a>

                            </div>
                        </div>
                    </div>
                ))}
                
            </>
    )
}

export default ProjectContainer
