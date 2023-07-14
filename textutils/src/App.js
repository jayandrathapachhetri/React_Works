import "./App.css";
import Navbar from "./Navbar.js";
import TextForm from "./components/TextForm";
import {useState} from "react";

function App() {
  const[mode, setMode] = useState('light'); //whether dark od is enable or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <div className="App">
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze below"  mode={mode}/ >
    </div>
    </div>
  );
}

export default App;
