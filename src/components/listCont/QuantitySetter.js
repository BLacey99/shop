import React from 'react';
import { useState } from "react";
import AddToCart from '../shopping-cart/cart/itemAdder/itemAdder';
export default function QuantitySetter (props){
   
    //const [Quantity, setQuantity] = useState(0);


    function QtyIncrement(){

        props.setQuantity(props.quantity + 1);
    }

    function QtyDecrement(){

        if(props.quantity <= 0){
            props.setQuantity(0);
        }
        else{
            props.setQuantity(props.quantity - 1);
        }
    }

    function removeCart(){
        props.cartGrow(props.cartSize - props.Quantity);
    }


    function handleChange(e){
        props.setQuantity(parseInt(e.target.value)); 
       
        //Default parses as string, so upon typing a value manually in the input box, it treats the value as
        //a string until the decrement function is called, in which case it converts back to an int and then performs as expected.
        //parseInt resolves this issue by ensuring the value is always an int.
    }

    return(
        <div className='QtySetter'>
            <button  onClick={QtyIncrement}>+</button>
            <input className="inputQuantityField" type="number"  onChange={handleChange} value={props.quantity} ></input>
            <button onClick={QtyDecrement}>-</button>

            <AddToCart Quantity={props.quantity}   cartGrow = {props.cartGrow}  cartSize={props.cartSize} price = {props.price} addFunct ={props.addFunct} quantity = {props.quantity} quantityRaise = {props.quantityRaise} />   
            <button onClick={removeCart}>Remove from Cart</button>
            </div>
    )
}         
         
