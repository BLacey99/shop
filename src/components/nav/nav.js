import React from 'react';
import nav from './nav.css';

export default function NavBar(){
    return(
        <nav className='nav-bar-comp'>
            <div id="Logo"><h1><a href="http://localhost:3000/">LogoHere</a></h1></div>
            <div id="nav-div">
                <button><a href="http://localhost:3000/">Home</a></button>
                <button><a href="http://localhost:3000/store">Store</a></button>
                <button><a href="http://localhost:3000/faq">FAQ</a></button>
            </div>
            <div id="contact-form"><button><a href="http://localhost:3000/contact">Contact Us</a></button></div>
        </nav>
    )
}