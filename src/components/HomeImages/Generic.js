import React from "react";
import "./ImageStyles.css";
import GenericBackground from "./photos/pcbackground.PNG";

export default function Generic(){
    return(
        <div className="images">
            <img src={GenericBackground} alt="Computer tower from side view with LED internal electronics glowing purple and green in dark orange room"/>
        </div>
    )
}