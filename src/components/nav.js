import React from 'react';
import nav from './nav.css';

export default function NavBar(){
    return(
        <nav>
            <div id="nav-div">
                <button>Home</button>
                <button>Store</button>
                <button>FAQ</button>
                <button>Contact Us</button>
            </div>
        </nav>
    )
}