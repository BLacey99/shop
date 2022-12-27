import React from "react";
import "./ImageStyles.css";
import GenericBackground from "./photos/pcbackground.PNG";
import "./photos/Generic.css";

export default function Generic(){
    return(
        <div className="images">
            <div className="Genericsector">
  
        <div>
            <h2>Statement here</h2>
            <p>Yes good statement go here about products and examples</p>
        </div>
           
          
      
            <img src={GenericBackground} alt="Computer tower from side view with LED internal electronics glowing purple and green in dark orange room"/>
            
            </div>
    </div>
    )
}