import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setalert] = useState(null);

  const showAlert = (message, type)=>{
        setalert({
          msg: message,
          type: type
        })
        setTimeout(() => {
          setalert(null);
        }, 1500);
  }

  const toggleMode = () =>{
    if(mode==="light"){
      setMode ('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled", "success");
      document.title= "TextUtils: Dark mode";
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is enabled", "success");
      document.title= "TextUtils: Light mode";
    }
  }
  return (
    <>
      <Router>
         <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
         <Alert alert = {alert}/>
         <div className="container my-3">
          <Routes>
            <Route path="/about" mode ={mode}
               element={<About />}
            />
            <Route path="/" element={<Textform showAlert = {showAlert} heading = "Enter the text to analyze below " mode={mode}/>}
            />
          </Routes>
        </div>
      </Router>  
    </>
  ); 
}

export default App;
