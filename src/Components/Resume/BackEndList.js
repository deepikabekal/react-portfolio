import React from 'react';
import {
	SiMongodb,
	SiMysql,
	SiGraphql,
	SiJest,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { IoLogoPwa } from "react-icons/io";


const BackEndList = () => {
    return (
        <div>
            <h3>Back-End Proficiencies</h3>
            <div>
                <DiMysql size={50}></DiMysql>
                <FaNodeJs size={50}></FaNodeJs>
				<SiJest size={50}></SiJest>
                <SiMongodb size={50}></SiMongodb>
                <SiGraphql size={50}></SiGraphql>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 32 32" width="64" height="64"><path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"/></svg>
            </div>
            <dl>
                <li >Server-side APIs</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>MongoDB & Mongoose - NoSQL</li>
                <li>React</li>
                <li>SQL</li>
                <li>ORM - Sequelize</li>
                <li>MVC</li>
                <li>Handlebars</li>
                <li>PWA</li>
                <li>GraphQL</li>               
            </dl>
        </div>
    )
}

export default BackEndList
