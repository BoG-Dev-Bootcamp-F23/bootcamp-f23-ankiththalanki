import './App.css';
import LinesPage from './pages/LinesPage';
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';
import Home from "./pages/Home.js";
import About from "./pages/About.js";
function App() {
  

  return (
  <BrowserRouter>
  <Routes>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="line">
      <Route path = ":color" element={<LinesPage/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  );
  
  
}

export default App;
