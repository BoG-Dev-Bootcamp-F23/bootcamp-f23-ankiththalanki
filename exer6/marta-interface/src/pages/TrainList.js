//Displays train data for a specific train object.
import "./TrainList.css"
import Train from "../components/Train.js";
export default function TrainList({color,stationList, arriving, direction, trainList}) {
    
    
    let filteredArrivals = trainList?.filter( (arrival) => {
            if (arrival.LINE === color) {
                //Also make sure station is correct
                if ( (direction === null)|| (direction === arrival.DIRECTION)) {
                if ((arriving && (arrival.WAITING_TIME === "Arriving"))  || (!arriving && (arrival.WAITING_TIME !== "Arriving")) || (arriving === null)) {
                if (stationList.includes("")) { //Null basically means all stations
                return arrival;
                }else {
                    if (stationList.includes(arrival.HEAD_SIGN)) {
                        return arrival;
                    }
                }
                }
                }
            }
        })
    
    if (filteredArrivals.length === 0) {
        return <div className="no-trains">No Trains </div>
    }else {
        return <div>{filteredArrivals.map((arrival) => {
            return <Train {...arrival}/>
        })}</div>
    }
    
}