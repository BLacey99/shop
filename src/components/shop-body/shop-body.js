import React from "react";
import ListBuilder from '../listBuilder/listBuilder';
import "../listCont/listContainer.css";
import { useState } from "react";
import "./shop-body.css"
import Cart from "../shopping-cart/cart/cart/cart"


export default function ShopBody(props){
    
 

    return(
        <div className="shop-body">
            <ListBuilder 
            cartSize = {props.cartSize}
            cartGrow = {props.cartGrow}
            addFunct={props.increment}
            />
        </div>
    )
}