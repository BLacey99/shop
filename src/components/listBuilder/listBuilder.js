import Lists from '../listCont/listContainer';
import data from "../data/colors";
import listBuildStyler from "./listBuilderStyler.css"

export default function ListBuilder(){
const entries = data.map(item =>{
    return(
        <Lists 
        data={item}
        />)
    })
    
    return(
        <div id="products">
            {entries}
        </div>

    )
}