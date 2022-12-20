import React from "react";
import "./FaqList.css";

export default function FaqList(){

    return(
        <div className="Faq-container">
<ol>
    <li>Yes</li>
    <li>
        <ul>Okay
            <li>Possible</li>
            <li>Kinda</li>
            <li>Okay again</li>
        </ul>
    </li>
    <li>More Info</li>
    <li>How Much Info?</li>
</ol>
        </div>
    )
}