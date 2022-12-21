import React from "react";
import ListBuilder from '../listBuilder/listBuilder';
import "../listCont/listContainer.css";
import { useState } from "react";
import "./shop-body.css"


export default function ShopBody(props){
    const[total, setTotal] = useState(0.00);
    const[cartSize, setCartSize] = useState(0);

    function increment(price){
        setTotal(total + price);
        setCartSize(cartSize+1);

        console.log("Cart size: " + cartSize);
        console.log("$"+total.toFixed(2));
        
    }

 

    return(
        <div className="shop-body">
            <ListBuilder addFunct={increment}/>
            <div className="cartValues">
            <p>Total: ${total.toFixed(2)}</p>
            <p>Cart: {cartSize}</p>
            </div>
        </div>
    )
}