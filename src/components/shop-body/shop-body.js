import React from "react";
import ListBuilder from '../listBuilder/listBuilder';
import "../listCont/listContainer.css";
import { useState } from "react";
import "./shop-body.css"


export default function ShopBody(props){
    const[total, setTotal] = useState(0.00);

    function increment(price){
        setTotal(total + price);
        console.log("$"+total.toFixed(2));
    }

    return(
        <div className="shop-body">
            <ListBuilder addFunct={increment}/>
            <p>Total: ${total.toFixed(2)}</p>
        </div>
    )
}