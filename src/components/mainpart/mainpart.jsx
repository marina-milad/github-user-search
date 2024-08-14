import "./mainpart.css"
import Sigment from "../sigment/sigment"
import bitmap from "../../assets/Bitmap.png"
import loction from "../../assets/003-pin.svg"
import twitter from "../../assets/004-twitter.svg"
import office from "../../assets/001-office-building.svg"
import github from "../../assets/002-url.svg"
import { Themecontext } from "../../App"
import { useContext } from "react"


function mainpart (){
    const passedvalues =useContext(Themecontext);
const arrayofobject =[{uniqueid:1,
    photo:loction,labeldata:"San Francisco"},
    {uniqueid:2,photo:twitter,labeldata:"Not Available"},
    {uniqueid:3,photo:github,labeldata:"http://github.blog"},
    {uniqueid:4,photo:office,labeldata:"@github"}]
    return(
        <div className={passedvalues.theme +"container"} id="maincontainer">
        <div className="topdiv">
            <img  id="bitmap" src={bitmap}/>
            <div>
                <h2 className={passedvalues.theme +"head"}> the  octocat</h2>
                <label id="firstlabel">@octocat</label><br></br>
                <label className={passedvalues.theme +"head"} id="secondlabel"> joined 26 jan 2011</label>
            </div>
        </div>
        <p className={passedvalues.theme +"head"} id="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt doloribus possimus debitis at dolorum,kjns dchi dbuhcn dcihid.</p>
        <div  className={passedvalues.theme +"bottom"} id="bottomdiv">
            <div className={passedvalues.theme +"head"} id="likes">
            <p>repos</p> <p>followers</p> <p>following</p>
            </div>
<div className={passedvalues.theme +"head"} id="like">
    <p>8</p><p>3938</p><p>9</p>
</div>
        </div>
        <div className="sigmentmain">
        {arrayofobject.map((item)=>{
return(
    <Sigment key={item.uniqueid}
    photo={item.photo}
    labeldata ={item.labeldata}
    ></Sigment>
)})}
        </div>
        </div>
    )
}
export default mainpart