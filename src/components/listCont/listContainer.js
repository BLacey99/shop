import React from 'react';
import "./listContainer.css";
import { useState } from "react";
import AddToCart from '../shopping-cart/cart/itemAdder/itemAdder';

export default function Lists (props){
   
        const [price, setPrice] = useState(props.data.price);
        const[quantity, setQuantity] = useState(0);
        const colorApplication = {
        color: props.data.value
    };

        function quantityRaise(){
            setQuantity(quantity+1);
            console.log("Quantity: "+quantity+ " Of color: " + props.data.color);
        }

    return(
        <div id="product-container"   key={props.data.id} style={colorApplication}>
            <img src="https://reactjs.org/logo-og.png" alt="React Logo"></img>
            <small>{props.data.id}</small><h3>{props.data.value}</h3>
            <p className='color' >This color is: {props.data.color}</p>
            <p>Price: {props.data.price}</p>
            <p>Quantity In Cart: {quantity}</p>
            <AddToCart price = {price} addFunct ={props.addFunct} quantityRaise = {quantityRaise}/>   
        </div>
    )
}