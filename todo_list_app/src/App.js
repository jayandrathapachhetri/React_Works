import "./App.css";
import Footer from "./MyComponents/Footer";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import About from "./MyComponents/About";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    // <div className="App">
    //   <Header title="Todo List" searchBar={true} />
    //   <Todos/>
    //   <Footer />
    // </div>
    <>
    <Router>
      <Header title="Todos List" searchBar={true} /> 
      <Routes>
          <Route exact path="/" element={<Todos/>} />
          
          <Route path="/about" element={<About/>} />
        </Routes> 
      <Footer />
    </Router>
    </>
  );
}

export default App;
