import React from "react";
import { useState } from "react";

export default function AddToCart(props){

    function addHandle(){
        props.addFunct(props.price * props.quantity);
        props.quantityRaise(props.quantity);

        
        props.cartGrow(props.cartSize + props.quantity);
    }


    return(
        <div>
            <button onClick={addHandle}>Add To Cart</button>
        </div>
    )

}