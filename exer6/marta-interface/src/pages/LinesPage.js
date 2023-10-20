//This page will display the entire interface, basically what we directly put in the application
import "./LinesPage.css";
import MartaButton from '../components/MartaButton.js'
import TrainList from "./TrainList.js";
import Navbar from "../components/Navbar.js";
import SelectLine from "../components/SelectLine.js";
import {useState} from "react";
export default function LinesPage(props) {
    
    const [color, setColor] = useState("GOLD");
    const [stationList, setStation] = useState([""]);
    //Pass set station into navbar
    return (<div className="lines-page">
        <SelectLine setColor={setColor}/>
        <div className="header">{color}</div>
        <div className="station-train">
        <Navbar color={color} setStation={setStation} stationList={stationList}/>
        <div>
            <div className="buttons">
                <MartaButton name="Arriving"/>
                <MartaButton name="Scheduled"/>
                {(color === "GOLD" || color === "RED") ? <><MartaButton name="Northbound"/>
                <MartaButton name="Southbound"/></> :<> <MartaButton name="Eastbound"/>
                <MartaButton name="Westbound"/></>}
                
            
            </div>
            
        <TrainList color={color} stationList={stationList}/>
        </div>
        </div>
        </div>);
}