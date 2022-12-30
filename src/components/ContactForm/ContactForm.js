import React from "react";
import { useState } from "react";
import "./ContactForm.css";


export default function ContactForm(){

    const[charCount, setCharCount] = useState(0);


    const limiter = {
        color:"",
        writable:true
    };

function handleChange(e){
    setCharCount(e.target.value.length);
   
}

function calcCount(charCount){
    if(charCount > 1000){
         limiter.color="red";
    }else{
         limiter.color="white";
    }
    return (1250-charCount);
}

    return(
        <form>
            <div className="backgroundFields">

           
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
                <textarea type="text" id="textField" rows="4" cols="50" maxlength="1250" onChange={handleChange}  required></textarea>
                <p id="charCountVal" style={limiter}>{calcCount(charCount)} characters remaining</p>
            </div>

            <div className="submitButton" >
                <input type="submit" id="submit" value="Submit"
                />
            </div>
            </div>
        </form>
    )

}