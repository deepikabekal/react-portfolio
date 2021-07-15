import React from 'react';
import {SiJquery} from "react-icons/si";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";

const FrontEndList = () => {
    return (
        <div>
            <h3>Front-End Proficiencies</h3>
            <div>
                <FaHtml5 size={50}></FaHtml5>
                <DiCss3 size={50}></DiCss3>
				<SiJquery size={50}></SiJquery>
                <AiFillApi size={50}></AiFillApi>
                <FaReact size={50}></FaReact>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 32 32" width="64" height="64"><path d="M3.34 15.658c.282-.232.488-.543.59-.893.206-.538-.057-1.14-.59-1.356-1.733-.878-2.852.686-3.014 1.05s-.448.942-.267 2.26.817 2.535 2.806 3.014c1.903.442 3.9.21 5.65-.66l5.88-2.452a7.21 7.21 0 0 1 1.661-.207V14.41a4.6 4.6 0 0 0-4.453-2.343c-3.176.25-4.438 1.884-5.2 2.584s-2.207 2.35-3.168 2.06-1.232-1.477-.893-1.842.606-.3.817 0c.13.242.194.513.188.787z"/><path d="M28.66 15.658c-.282-.232-.488-.543-.59-.893-.206-.538.057-1.14.59-1.356 1.733-.878 2.852.686 3.014 1.05s.448.942.267 2.26-.817 2.535-2.806 3.014c-1.903.442-3.9.21-5.65-.66l-5.88-2.452a7.21 7.21 0 0 0-1.661-.207V14.41a4.6 4.6 0 0 1 4.453-2.343c3.176.25 4.438 1.884 5.2 2.584s2.207 2.35 3.168 2.06 1.232-1.477.893-1.842-.606-.3-.817 0c-.13.242-.194.513-.188.787z"/></svg>
            </div>
        </div>
    )
}

export default FrontEndList
