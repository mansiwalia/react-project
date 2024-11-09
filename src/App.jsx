import { Route, Routes } from "react-router-dom";
import './App.css';
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/aboutus" element={<Aboutus/>}></Route>
      <Route path="/contactus" element = {<Contactus/>}></Route>
    
      
      </Routes>
  </>
  );
}

export default App
