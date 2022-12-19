import React from 'react';
import listContStyles from "./listContainer.css";
import { useState } from "react";

export default function Lists (props){
   
   /*  const [colLor, setColor] = useState(props.data.value);
    
    function colorize(){
            setColor(props.data.value);
        console.log(colLor);
      
    }
    */
        const colorApplication = {
        color: props.data.value
        
    };


    return(
        <div id="product-container" /* onClick={colorize} */ key={props.data.id} style={colorApplication}>
            <small>{props.data.id}</small><h3>{props.data.value}</h3>
            <p className='color' >This color is: {props.data.color}</p>
          
        </div>
       
    )
}
