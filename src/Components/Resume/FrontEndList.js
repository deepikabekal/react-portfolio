import React from 'react';
import {SiJquery} from "react-icons/si";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import HandlebarsIcon from './HandlebarsIcon';

const FrontEndList = () => {
    return (
        <div id="front-end">
            <h4>Front-End</h4>
            <div className="icons">
                <FaHtml5 size={50}></FaHtml5>
                <DiCss3 size={50}></DiCss3>
				<SiJquery size={50}></SiJquery>
                <AiFillApi size={50}></AiFillApi>
                <FaReact size={50}></FaReact>
                <HandlebarsIcon></HandlebarsIcon>
                
            </div>
        </div>
    )
}

export default FrontEndList
