import "./maincontainer.css"
import Upperpart from "../upperpart/upperpart"
import Mainpart from "../mainpart/mainpart"
import { Themecontext } from "../../App"
import { useContext } from "react"
function maincontainer (){
    const passedvalues =useContext(Themecontext);
    console.log(passedvalues.theme);
 return (
    <main  className={passedvalues.theme+"main"}>
<Upperpart></Upperpart>
<Mainpart></Mainpart>
    </main>
 )
}
export default maincontainer