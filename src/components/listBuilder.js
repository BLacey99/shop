import Lists from "./listContainer";
import data from "./colors";
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