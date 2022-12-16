import React from 'react';
import nav from './nav.css';

export default function NavBar(){
    return(
        <nav>
            <div id="Logo"><h1>LogoHere</h1></div>
            <div id="nav-div">
                <button>Home</button>
                <button>Store</button>
                <button>FAQ</button>
            </div>
            <div id="contact-form"><button>Contact Us</button></div>
        </nav>
    )
}