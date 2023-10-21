import "./Homefiles/Home.css"

import {useNavigate} from "react-router-dom";
export default function Home(){
    const navigate = useNavigate();

    
    return (<div className="home">
        <div className="header1">
            
        <h1>MARTA</h1> 
        <button className="about"onClick={()=>(navigate("/about"))}>About MARTA</button>
         </div>

         <div className="maincontent">
            <div className="routes">
                    <h1>VIEW ROUTES SCHEDULE</h1>
                    <button onClick={()=>(navigate("/line/GOLD"))}>Gold Line</button>
                    <button onClick={()=>(navigate("/line/RED"))}>Red Line</button>
                    <button onClick={()=>(navigate("/line/BLUE"))}>Blue Line</button>
                    <button onClick={()=>(navigate("/line/GREEN"))}>Green Line</button>
                
                </div>
                <img width = "400px"src="data:image/png;base64,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"/>
         </div>


    </div>);
}