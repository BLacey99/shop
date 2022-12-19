import React from 'react';
import "./listContainer.css";
import { useState } from "react";
import AddToCart from '../shopping-cart/cart/itemAdder/itemAdder';

export default function Lists (props){
   
        const [price, setPrice] = useState(props.data.price);
        const colorApplication = {
        color: props.data.value
    };

    function setter(){
        props.cake(price);
        console.log(props.data.price)
    }

    return(
        <div id="product-container" onClick={setter}  key={props.data.id} style={colorApplication}>
            <small>{props.data.id}</small><h3>{props.data.value}</h3>
            <p className='color' >This color is: {props.data.color}</p>
            <p>Price: {props.data.price}</p>
            <AddToCart price = {price} setNewTotal ={props.cake} />   
        </div>
    )
}