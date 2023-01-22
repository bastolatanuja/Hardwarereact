
import './App.css';
import Navbar from './components/Nav';
import "bootstrap/dist/css/bootstrap.min.css";
// import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './components/LogIn';
import Register from './components/Register';


import Homepage from './components/Homepage';

function App() {
  return (
    <div>
      <Navbar/>
      
      
      
     
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />}/>
        <Route path="login" element={<LogIn />}/>
        <Route path="signup" element={<Register />}/>
      </Routes>
    </BrowserRouter>
      
     
   </div>
  );
}

export default App;
