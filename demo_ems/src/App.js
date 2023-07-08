// import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import EmpListing from './components/EmpListing';
import EmpCreate from './components/EmpCreate';
import EmpDetail from './components/EmpDetail';
import EmpEdit from './components/EmpEdit';

import Register from "./components/Register";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import About from "./components/About";
import Protected from "./components/Protected";

// import Edit from "./components/Edit";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/signup" element={<SignUp/>}></Route> */}
          <Route path="/" element={< Home/>} />
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={< LogIn/>} ></Route>
          <Route path="/about" element={<Protected Component ={About}/>} />
          {/* <Route path="/edit" element={< Edit/>} /> */}
          
          {/* <Route path='/emplist' element={<EmpListing />}></Route> */}
          <Route path='/emplist' element={<Protected Component ={EmpListing}/>} />
          <Route path='/employee/create' element={<EmpCreate />}></Route>
          <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route>
          <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
      
          
          </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;