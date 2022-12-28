import React from "react";

function Profile(){
    return(
        <div>
            <h1>Content here</h1>
        </div>
    )
}

export {Profile};


//This is the same as writing it with vanilla JS like:

function Profile2(){
    const body = document.getElementById("body");
    const divBuilder = document.createElement('div');
    const headerOne = document.createElement('h1');
    headerOne.innerHTML=("Content here");
    divBuilder.appendChild(headerOne);
    body.appendChild(divBuilder);
}