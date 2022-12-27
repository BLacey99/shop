import React from "react";
import "./ImageStyles.css";
import AmdImage from "./photos/amd.webp";
import "./photos/Amd.css";

export default function Amd(){
return(
    <div className="images">
        <div className="AMDsector">
  
  <div>
        <h2>Statement here</h2>
        <p>Yes good statement go here about products and examples</p>
        </div>
           
            <img src={AmdImage}/>
           
            </div>
    </div>
)
}