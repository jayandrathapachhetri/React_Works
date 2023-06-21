// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpListing from "./components/EmpListing";

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
