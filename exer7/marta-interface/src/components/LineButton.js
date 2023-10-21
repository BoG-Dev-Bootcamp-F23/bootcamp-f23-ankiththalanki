import "./LineButton.css"
const colors = {

    "GOLD" : "#e8b60d",
    "BLUE" : "#077ca9",
    "GREEN" : "#5da73a",
    "RED" : "#bf3b3c"
};
export default function LineButton(props) {
    const buttonStyle = {
        backgroundColor: colors[props.color.toUpperCase()]
    }
    return (<button className="line-button" style={buttonStyle} onClick={props.onClick}>{props.color}</button>);
}