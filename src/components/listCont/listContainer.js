import React from 'react';
import "./listContainer.css";
import { useState } from "react";
import AddToCart from '../shopping-cart/cart/itemAdder/itemAdder';
import QuantitySetter from './QuantitySetter';
export default function Lists (props){
   
        const [price, setPrice] = useState(props.data.price);
        const[quantity, setQuantity] = useState(0);
        const[incremental, setIncremental] = useState(0);
        const colorApplication = {
        color: props.data.value
    };

        function quantityRaise(){
            if(quantity < 0){
                setQuantity(0);
            }else{
                setQuantity(quantity);
            }
          
            console.log("Quantity: "+quantity+ " Of color: " + props.data.color);
        }

   
    return(
        <div id="product-container"   key={props.data.id} style={colorApplication}>
            <img src="https://reactjs.org/logo-og.png" alt="React Logo"></img>
            <small>{props.data.id}</small><h3>{props.data.value}</h3>
            <p className='color' >This color is: {props.data.color}</p>
            <p>Price: {props.data.price}</p>
          
            
            <QuantitySetter setQuantity = {setQuantity}   cartGrow = {props.cartGrow} cartSize={props.cartSize}  price = {price} addFunct ={props.addFunct} quantity = {quantity} quantityRaise = {quantityRaise}/>
           
        </div>
    )
}