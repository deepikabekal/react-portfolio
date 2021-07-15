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
            imageName : 'weather.jpg',
            webpage : "https://deepikabekal.github.io/Weather-Dashboard/.",
            github : "https://github.com/deepikabekal/Weather-Dashboard"

        },
        {
            name : 'Covid Now',
            description : "Covid-Now is an application that provides Covid-19 information and latest Covid-19 news for the country that the user will enter in the Search box.",
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
        }
    ];

    function getWebPage(e) {

    }
    return (
            <>
                {projectList.map((item) => (
                    <div class="col mb-4" id="hello">
                        <div className="card h-100">
                            <a href= {item.webpage} target="_blank">
                                <img src={require(`../../assets/images/${item.imageName}`).default} className="image img-thumbnail" alt="project example" onClick={getWebPage}/>
                            </a>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                                <div>
                                <p className="card-text">{item.tech}</p>
                                <a href={item.github} target="_blank"><i className="fab fa-github fa-2x"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                
            </>
    )
}

export default ProjectContainer
