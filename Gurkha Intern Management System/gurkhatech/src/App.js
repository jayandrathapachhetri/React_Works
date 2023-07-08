import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Addintern from "./components/Addintern";
import Protected from "./components/Protected";
// import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={<Protected Component ={Addintern} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
