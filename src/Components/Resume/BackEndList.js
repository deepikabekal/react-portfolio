import React from 'react';
import ExpressIcon from './ExpressIcon';
import {
	SiMongodb,
	SiMysql,
	SiGraphql,
	SiJest,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMysql, DiGit } from "react-icons/di";
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
                <ExpressIcon></ExpressIcon>
                <DiGit size={50}></DiGit>
            </div>
        </div>
    )
}

export default BackEndList
