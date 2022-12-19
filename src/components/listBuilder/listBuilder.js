import Lists from '../listCont/listContainer';
import data from "../data/colors";
import "./listBuilderStyler.css"


export default function ListBuilder(props){

const entries = data.map(item =>{
    return(
        <Lists 
        cake = {props.addFunct}
        data={item}
        />)
    })
    
    return(
        <div id="products">
            {entries}
        </div>

    )
}