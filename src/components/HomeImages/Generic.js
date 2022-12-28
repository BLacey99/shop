import React from "react";
import "./ImageStyles.css";
import GenericBackground from "./photos/pcbackground.PNG";
import "./photos/Generic.css";

export default function Generic(){
    return(
        <div className="images">
            <div className="Genericsector">
  
  <div className="genericInner">
        <div>
            <h2>Statement here</h2>
            <p>Yes good statement go here about products and examples. "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
        </div>
           
          
      
            <img src={GenericBackground} alt="Computer tower from side view with LED internal electronics glowing purple and green in dark orange room"/>
            
            </div>
            </div>
    </div>
    )
}