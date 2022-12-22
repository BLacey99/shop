import React from "react";
import "./cart.css";
import { useState } from "react";
import CartIcon from "./cartIcon.png";

export default function Cart(props) {
  return (
    <div className="cartClass">
      <div id="cartContainer">
      <a href="http://localhost:3000/"><img id="cartIcon" src={CartIcon}></img></a>
        <div id="cartSize">
          <p>{props.cartSize}</p>
        </div>
      </div>

      <p>Total: ${props.total.toFixed(2)}</p>
    </div>
  );
}
