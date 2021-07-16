import React from 'react'

const Nav = (props) => {

    const {
        sections = [],
        currentSection,
        setCurrentSection
    }  = props;

    return (
        <>
            <div>
            <h1>Deepika Bekal</h1>
            {/* <h6>Full Stack Web Developer</h6> */}
            </div>            

            <nav>
                <ul>
                    {sections.map((sectionName) => (
                        <li className = {` section-name ${currentSection === sectionName && 'navActive'}`} key = {sectionName}>
                            <span onClick = {() => setCurrentSection(sectionName)}>
                                {sectionName}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Nav
