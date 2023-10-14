import './App.css';
import LinesPage from './pages/LinesPage';
import Train from "./components/Train";

function App() {
  let exampleTrainObject = {
    "DESTINATION": "DORAVILLE",
    "DIRECTION": "N",
    "EVENT_TIME": "2023-10-05T16:57:23Z",
    "HEAD_SIGN": "DORAVILLE",
    "LINE": "GOLD",
    "NEXT_ARR": "2023-10-05T16:59:38Z",
    "STATION": "DORAVILLE STATION",
    "TRAIN_ID": "303",
    "WAITING_SECONDS": "131",
    "WAITING_TIME": "2 min",
    "RESPONSETIMESTAMP": "2023-10-05T16:57:27Z",
    "VEHICLELONGITUDE": "33.895333",
    "VEHICLELATITUDE": "-84.293652",
    "DELAY": "T58S",
    "TRIP_ID": "3060"
  }

  return (<div>
    <LinesPage {...exampleTrainObject}/>
  </div>
  
  );
  
  
}

export default App;
