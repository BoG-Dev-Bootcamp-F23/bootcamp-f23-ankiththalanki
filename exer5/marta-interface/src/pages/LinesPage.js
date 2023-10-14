//This page will display the entire interface, basically what we directly put in the application
import "./LinesPage.css";
import TrainList from "./TrainList.js";
import Navbar from "../components/Navbar.js";

export default function LinesPage(props) {
    return (<div className="lines-page">
        <Navbar color="BLUE"/>
        <TrainList color="BLUE"/>
        </div>);
}