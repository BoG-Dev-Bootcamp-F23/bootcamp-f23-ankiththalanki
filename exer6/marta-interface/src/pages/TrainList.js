//Displays train data for a specific train object.

import Train from "../components/Train.js";
import arrivals from "../server/trainData.js";
export default function TrainList({color,stationList}) {
    
    return (<div>
        {arrivals["RailArrivals"].map( (arrival) => {
            if (arrival.LINE === color) {
                //Also make sure station is correct
                if (stationList.includes("")) { //Null basically means all stations
                return (<Train {...arrival}/>);
                }else {
                    if (stationList.includes(arrival.HEAD_SIGN)) {
                        return (<Train {...arrival}/>);
                    }
                }
            }
        })}
    </div>);
}