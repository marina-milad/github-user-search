 
 import "./upperpart.css"
 import light from "../../assets/002-sun.svg"
 import moon from "../../assets/moon.svg"
 import search from "../../assets/Combined Shape.png"
 import { Themecontext } from "../../App"
 import { useContext } from "react"

function upperpart (){
    const theme = useContext(Themecontext);

function HandleOnClick(event){
        let newvalue;
if (event.target.checked == false) {
    newvalue ="dark"}else{newvalue="light"}
theme.settheme(newvalue)
    }
    const passedvalues =useContext(Themecontext)
    return(
<div className="containdiv">
    <div id="buttondiv" className={passedvalues.theme+"header"}>
<label className={passedvalues.theme+"header"} id="finder">devfinder</label> 
<button  className={passedvalues.theme+"header"} id="lightbtn" onClick={HandleOnClick}>
<label  className="changecolor">light</label> 
    <img  className={passedvalues.theme+"sun"} src={light} />
    <img  className={passedvalues.theme+"moon"} src={moon} />
</button> 
    </div>
    <div  className={passedvalues.theme+"input"} id="inputdev">
<img src={search}></img>
<input className={passedvalues.theme+"input"} id="searchinput" placeholder="search GitHub username"></input>
<button className="searchbtn"> search</button>
    </div>
</div>
)
}
export default upperpart