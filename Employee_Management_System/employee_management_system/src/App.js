import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import Protected from "./components/Protected";
import Header from "./components/Header";
import About from "./components/About";
import Edit from "./components/Edit";
import ContactUs from "./components/ContactUs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route SignUp />
          <Route path="/" element={< Protected Component = {Home} />} />
          <Route path="/signup" element={<Protected Component = {SignUp} />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/about" element={<Protected Component = {About} />} />
          <Route path="/edit" element={<Protected Component = {Edit} />} />
          <Route path="/contactus" element={<Protected Component = {ContactUs} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
