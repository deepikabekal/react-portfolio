import React from 'react'

const Nav = (props) => {

    const {
        sections = [],
        currentSection,
        setCurrentSection
    }  = props;

    return (
        <>
            <h1>Deepika Bekal</h1>
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
