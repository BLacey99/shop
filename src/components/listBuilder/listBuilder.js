import Lists from '../listCont/listContainer';
import data from "../data/colors";
import "./listBuilderStyler.css"


export default function ListBuilder(props){

const entries = data.map(item =>{
    return(
        <Lists 
        addFunct = {props.addFunct}
        quantity = {props.quantity}
        cartSize = {props.cartSize}
        cartGrow = {props.cartGrow}
        data={item}
        />)
    })
    
    return(
        <div id="products">
            {entries}
        </div>

    )
}