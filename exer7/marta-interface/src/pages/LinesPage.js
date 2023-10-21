//This page will display the entire interface, basically what we directly put in the application
import "./LinesPage.css";
import MartaButton from '../components/MartaButton.js'
import TrainList from "./TrainList.js";
import Navbar from "../components/Navbar.js";
import SelectLine from "../components/SelectLine.js";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

export default function LinesPage() {
    const params = useParams();
    const [allStations, setAllStations] = useState({"GOLD":[],"RED":[],"BLUE":[],"GREEN":[]}); //Should be a list of station names
    const [allTrains, setAllTrains] = useState([]); //Should be a list of train objects
    const [color, setColor] = useState(params.color.toUpperCase());
    const [stationList, setStation] = useState([""]);
    const [arriving, setArriving] = useState(null); //3 states, null, Arriving, or Scheduled. 
    const [direction,setDirection] = useState(null); // N, W, E, S, or null for all.
    const [loading, setLoading] = useState(true);
    //Pass set station into navbar
    

    useEffect(()=>{
        setStation([""]);
        setArriving(null);
        setDirection(null);
    },[color]);
    useEffect(() =>{
        //Run this to load our code
        async function getStations() {
            const stations = {};
            let goldData = await fetch("http://13.59.196.129:3001/stations/gold");
            goldData = await goldData.json();
            stations["GOLD"] = goldData;

            let redData = await fetch("http://13.59.196.129:3001/stations/red");
            redData = await redData.json();
            stations["RED"] = goldData;

            let blueData = await fetch("http://13.59.196.129:3001/stations/blue");
            blueData = await blueData.json();
            stations["BLUE"] = blueData;

            let greenData = await fetch("http://13.59.196.129:3001/stations/green");
            greenData = await greenData.json();
            stations["GREEN"] = greenData;
            setAllStations(stations);
            
        }

        async function getTrains() {
            
            let goldLines = await fetch("http://13.59.196.129:3001/arrivals/gold");
            goldLines = await goldLines.json();
            let trains = goldLines;

            let redLines = await fetch("http://13.59.196.129:3001/arrivals/red");
            redLines = await redLines.json();
            trains = [...trains,...redLines];

            let blueLines = await fetch("http://13.59.196.129:3001/arrivals/blue");
            blueLines = await blueLines.json();
            trains = [...trains,...blueLines];

            let greenLines = await fetch("http://13.59.196.129:3001/arrivals/green");
            greenLines = await greenLines.json();
            trains = [...trains,...greenLines];
            setAllTrains(trains);
            setLoading(false);
            //Put setLoading here cuz the awaits ensure it isnt reun before previous commands are run.
        }
        getStations()
        getTrains()
        
    },[])
    const SelectedStyle= {
        backgroundColor: "black", color: "white"
    }
    return (<div className="lines-page">
        <SelectLine setColor={setColor}/>
        <div className="header">{color}</div>
        <div className="station-train">
        <Navbar color={color} setStation={setStation} stationList={stationList} allStations={allStations}/>
        
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
            
        <TrainList color={color} stationList={stationList} arriving={arriving} direction={direction} trainList={allTrains} loading={loading}/>
        </div>
        </div>
        </div>);
}