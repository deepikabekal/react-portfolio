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

const BackEndList = () => {
    return (
        <div id="back-end">
            <h4>Back-End</h4>
            <div className="icons">
                <FaNodeJs size={50}></FaNodeJs>
				<SiJest size={50}></SiJest>
                <DiMysql size={50}></DiMysql>
                <SiMongodb size={50}></SiMongodb>
                <SiGraphql size={50}></SiGraphql>
                <DiGit size={50}></DiGit>
                <ExpressIcon></ExpressIcon>
            </div>
        </div>
    )
}

export default BackEndList;
