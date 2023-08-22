import React from "react";
import '../stylesheet/Screenadd.css'

//Button used mainly in the add function
const Button = ({text, onClick}) =>{
    return(
        <button onClick={onClick} className="btn">{text}</button>
    )
}

export default Button;
