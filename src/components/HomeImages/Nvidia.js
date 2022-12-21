import React from "react";
import "./ImageStyles.css";
import NvidiaLogo from "./photos/nvidia-logo.jpg";


export default function Nvidia(){
    return(
        <div className="images">
            <img src={NvidiaLogo}/>
        </div>
    )
}