import React from "react";
import '../stylesheet/Screenadd.css'
import {FaYoutube,FaTwitter,FaArrowLeft} from 'react-icons/fa';
import { useLocation, useNavigate } from "react-router-dom";

//To be used in future
const Arrow = (props) => {
    const navigate = useNavigate();
    

    function handleClickToHome(){
        navigate(props.nameurl);
    }

    return (  
        <div className="arrow-box">
           
           <FaArrowLeft onClick={handleClickToHome} className="icons"/>
        </div>
    );
}
 
export default Arrow;