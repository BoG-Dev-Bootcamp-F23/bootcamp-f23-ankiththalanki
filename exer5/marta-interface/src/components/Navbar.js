//This is the navbar.
import "./Navbar.css"
import stations from "../server/stationData.js";
import Station from "./Station.js"
export default function Navbar(props) {
    let color = props.color.toLowerCase();
    return (<div className="navbar">
        Select your starting station
        {stations[color].map( (station) => {
             return <Station stationName={station}/>;
            
        })}

    </div>);
}