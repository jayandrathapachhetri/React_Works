import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// import SignUp from "./components/SignUp";
// import LogIn from "./components/LogIn";
import Home from "./components/Home";
// import Protected from "./components/Protected";
import Header from "./components/Header";
import About from "./components/About";
import Service from "./components/Service";
import ContactUs from "./components/ContactUs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/signup" element={<SignUp/>} /> */}
          {/* <Route path="/login" element={< LogIn/>} /> */}
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={< About/>} />
          <Route path="/service" element={< Service/>} />
          <Route path="/contactus" element={< ContactUs/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
