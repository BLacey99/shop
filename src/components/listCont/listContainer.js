import React from 'react';




export default function Lists (props){
    return(
        <div id="product-container" key={props.data.id}>
            <small>{props.data.id}</small><h3>{props.data.value}</h3>
            <p>This color is: {props.data.color}</p>
        </div>
    )
}
