// import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import EmpListing from './components/EmpListing';
import EmpCreate from './components/EmpCreate';
import EmpDetail from './components/EmpDetail';
import EmpEdit from './components/EmpEdit';
// import ImageGallery from './components/ImageGallery';

import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
// import Protected from "./components/Protected";
import Header from "./components/Header";
import About from "./components/About";
// import Edit from "./components/Edit";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/emplist' element={<EmpListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>
          <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route>
          <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
      
          <Route path="/" element={<SignUp/>}></Route>
          <Route path="/login" element={< LogIn/>} ></Route>
          <Route path="/signup" element={< SignUp/>} ></Route>
          <Route path="/home" element={<Home/>} ></Route>
          <Route path="/about" element={< About/>}></Route>
          {/* <Route path="/edit" element={< Edit/>} /> */}
          <Route path="/contactus" element={< ContactUs/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;