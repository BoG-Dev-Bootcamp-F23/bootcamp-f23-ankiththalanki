//Displays train data for a specific train object.

import Train from "../components/Train.js";
import arrivals from "../server/trainData.js";
export default function TrainList({color,stationList, arriving, direction}) {
    
    return (<div>
        {arrivals["RailArrivals"].map( (arrival) => {
            if (arrival.LINE === color) {
                //Also make sure station is correct
                console.log(direction);
                if ( (direction === null)|| (direction === arrival.DIRECTION)) {
                if ((arriving && (arrival.WAITING_TIME === "Arriving"))  || (!arriving && (arrival.WAITING_TIME !== "Arriving")) || (arriving === null)) {
                if (stationList.includes("")) { //Null basically means all stations
                return (<Train {...arrival}/>);
                }else {
                    if (stationList.includes(arrival.HEAD_SIGN)) {
                        return (<Train {...arrival}/>);
                    }
                }
                }
                }
            }
        })}
    </div>);
}