import React from "react"
import './cart.css'
import { useState } from "react";

export default function Cart(props){

    return(
        <div className="cartClass">
            <p>Total: ${props.total.toFixed(2)}</p>
            <p>Cart: {props.cartSize}</p>
        </div>
    )

}