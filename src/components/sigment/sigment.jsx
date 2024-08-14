import "./sigment.css"
import { Themecontext } from "../../App"
import { useContext } from "react"
function sigment (props){

    const passedvalues =useContext(Themecontext);
    console.log(passedvalues.theme);
    
    return(
        <div id="sigmentdiv" >
<img src={props.photo}/>
<label className={passedvalues.theme+"sigmentpart"}>{props.labeldata} </label>
        </div>
    )
}
export default sigment