import "./Homefiles/About.css"

import {useNavigate} from "react-router-dom";
export default function About() {
    const navigate = useNavigate();
    return (<div className="about-marta">
        
    <div className="about-header"><h1>About MARTA</h1> <button onClick={()=>{navigate("/")}}>Home</button></div>
    

    <div className="about-content">
        <div className="info-about"><h1>ABOUT</h1>
        
                The MARTA train system, Atlanta's premier public transportation network, has been a vital part of the city's infrastructure for over four decades. With a commitment to efficiency, accessibility, and sustainability, MARTA connects millions of passengers to key destinations across the metropolitan area. Our trains offer a fast and reliable means of getting around, reducing traffic congestion and environmental impact. Whether you're a commuter, tourist, or local resident, MARTA is your ticket to a seamless, eco-friendly journey through the heart of Atlanta. Join us in experiencing the future of urban mobility with MARTA.
        </div>
        <img width="400px"src="https://www.itsmarta.com/uploadedimages/train-stations-map-2020.jpg"/>
    </div>
    
    </div>);
}