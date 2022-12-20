import React from "react";

import "./ContactForm.css";


export default function ContactForm(){




    return(
        <form>
            <div className="fieldset">
                <label>Name* </label>
                <input type="text" required></input>
            </div>
            <div className="fieldset">
                <label>Email* </label>
                <input type="email" required></input>
            </div>
            <div className="fieldset">
                <label>Subject* </label>
                <input type="text" required></input>
            </div>
            <div className="fieldset" id="messageBox">
                <label>Message </label>
                <input type="text" required></input>
            </div>

            <div className="submitButton" id="submit">
                <input type="submit"/>
            </div>
        </form>
    )

}