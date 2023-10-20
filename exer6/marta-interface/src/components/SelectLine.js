import LineButton from "./LineButton.js";
import "./SelectLine.css"
export default function SelectLine(props) {
    return (<div className="select">
        <LineButton color="Gold" onClick={()=>{
            props.setColor("GOLD");
            console.log("Color changed to gold")
        }} />
        <LineButton color="Red" onClick={()=>{
            props.setColor("RED");
        }} />
        <LineButton color="Blue" onClick={()=>{
            props.setColor("BLUE");
        }} />
        <LineButton color="Green" onClick={()=>{
            props.setColor("GREEN");
        }} />
        
    </div>);
}