import React from "react";
import { useState } from "react";

export default function AddToCart(props){

    function addHandle(){
        props.setNewTotal(props.price);
    }


    return(
        <div>
            <button onClick={addHandle}>Add To Cart</button>
        </div>
    )

}