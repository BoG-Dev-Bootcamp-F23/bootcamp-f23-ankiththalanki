import "./Station.css"

export default function stations({stationName, stationList, setStation}) {
   
    const textStyle = {
        backgroundColor: (stationList.includes(stationName.toUpperCase()) || (stationList.includes("") && stationName === "All Stations")) ? "rgb(81, 81, 81)" : "transparent"
        //This text style property makes it so the hover property doesn't work.
    }
    
    return (<button className="station" style={textStyle} onClick={() => {
        let currentStation = stationName;
        if (stationName === "All Stations") {
            currentStation = "";
        }
        
        if (!(stationList.includes(currentStation.toUpperCase()))) {
            setStation([...stationList, currentStation.toUpperCase()]); 
            
        }else {
            console.log(stationList, "printed");
            setStation(stationList.filter((station) => (station !== currentStation.toUpperCase())));
            
        }
        
        
    }}>{stationName}
        </button>);
}
//Currently doesn't appear to be able to remove "" string.