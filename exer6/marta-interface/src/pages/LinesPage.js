//This page will display the entire interface, basically what we directly put in the application
import "./LinesPage.css";
import MartaButton from '../components/MartaButton.js'
import TrainList from "./TrainList.js";
import Navbar from "../components/Navbar.js";
import SelectLine from "../components/SelectLine.js";
import {useState, useEffect} from "react";
export default function LinesPage(props) {
    
    const [color, setColor] = useState("GOLD");
    const [stationList, setStation] = useState([""]);
    const [arriving, setArriving] = useState(null); //3 states, null, Arriving, or Scheduled. 
    const [direction,setDirection] = useState(null); // N, W, E, S, or null for all.
    //Pass set station into navbar
    useEffect(()=>{
        setStation([""]);
        setArriving(null);
        setDirection(null);
    },[color]);

    const SelectedStyle= {
        backgroundColor: "black", color: "white"
    }
    return (<div className="lines-page">
        <SelectLine setColor={setColor}/>
        <div className="header">{color}</div>
        <div className="station-train">
        <Navbar color={color} setStation={setStation} stationList={stationList}/>
        
        <div>
            <div className="buttons">
                <MartaButton buttonStyle={(arriving === true) ?SelectedStyle : {}} name="Arriving" onClick={() => {
                    if (arriving) {
                        setArriving(null);
                    }else {
                        //
                        setArriving(true);

                    }
                }}/>
                <MartaButton buttonStyle={(arriving === false) ?SelectedStyle : {}} name="Scheduled" onClick={() => {
                    if (arriving === false) {
                        setArriving(null);
                    }else {
                        //
                        setArriving(false);

                    }
                }}/>
                {(color === "GOLD" || color === "RED") ?
                <><MartaButton name="Northbound" buttonStyle={(direction === "N") ?SelectedStyle : {}} onClick = {() => {
                    if (direction === "N") {
                        setDirection(null);
                    }else {
                        setDirection("N");
                    }
                    
                }}/>
                <MartaButton name="Southbound" buttonStyle={(direction === "S") ?SelectedStyle : {}}onClick = {() => {
                    if (direction === "S") {
                        setDirection(null);
                    }else {
                        setDirection("S");
                    }
                    
                }}/></> :

                <> <MartaButton name="Eastbound" buttonStyle={(direction === "E") ?SelectedStyle : {}}onClick = {() => {
                    if (direction === "E") {
                        setDirection(null);
                    }else {
                        setDirection("E");
                    }
                    
                }}/>
                <MartaButton name="Westbound" buttonStyle={(direction === "W") ?SelectedStyle : {}}onClick = {() => {
                    if (direction === "W") {
                        setDirection(null);
                    }else {
                        setDirection("W");
                    }
                    
                }}/></>}
                
            
            </div>
            
        <TrainList color={color} stationList={stationList} arriving={arriving} direction={direction}/>
        </div>
        </div>
        </div>);
}