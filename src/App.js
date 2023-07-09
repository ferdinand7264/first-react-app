import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import About from './Components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [modeText, setTextMode] = useState('dark');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setTextMode('light');
      showAlert("Dark Mode is On", "success");
    }
    else {
      setMode('light');
      setTextMode('dark');
      showAlert("Light Mode is On", "success");
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      closeAlert();
    }, 2000);
  }
  const closeAlert = () => {
    setAlert(null);
  }
  return (
    <Router>
      <div className={`bg-${mode} pb-5`}>
        <Navbar title="TextUtils" about="textAbout" mode={mode} toggleMode={toggleMode} textMode={modeText} />
        <Alert alert={alert} closeAlert={closeAlert} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm heading="Enter the Text to Analyze below" mode={mode} toggleMode={toggleMode} textMode={modeText} showAlert={showAlert} />} />
            <Route path="/about" element={<About mode = {mode}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
