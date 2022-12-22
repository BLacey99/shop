import React from 'react';
import './nav.css';
import Cart from '../shopping-cart/cart/cart/cart';
import { useState } from 'react';
export default function NavBar(props){

    return(
        <nav className='nav-bar-comp'>
            <div id="Logo"><h1><a href="http://localhost:3000/">LogoHere</a></h1></div>
            <div id="nav-div">
            <a href="http://localhost:3000/"><button>Home</button></a>
                <a href="http://localhost:3000/store"><button>Store</button></a>
               <a href="http://localhost:3000/faq"><button>FAQ</button></a>
            </div>
            <div id="contact-form"><a href="http://localhost:3000/contact"><button>Contact Us</button></a></div>
            
       
        </nav>
    )
}
