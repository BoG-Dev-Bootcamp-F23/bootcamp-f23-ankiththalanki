import "./MartaButton.css"
export default function MartaButton({name, buttonStyle, onClick}) {
    
    return (<button className="marta-button" style={buttonStyle} onClick={onClick}>{name}</button>);
}