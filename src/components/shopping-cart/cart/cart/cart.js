import React from "react"
import './cart.css'
import { useState } from "react";

export default function Cart(props){

    const [total, setTotal] = useState(0.00);
   

/*     function reduction(){
        setTotal(total - props.data.price);
        return total.toString();
    }
    function append(){
        setTotal(total + props.data.price);
        return total.toString();
    }

    function voidItOut(){
        setTotal(0.00);
        return total.toString();
    } */


    return(
        <div>
              
            <p>Total: ${total}</p>
            <p>Hello {total + 1}</p>
            
        
        </div>
    )

}