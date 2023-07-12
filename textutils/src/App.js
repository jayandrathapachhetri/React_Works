// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Navbar.js";
import TextForm from "./components/TextForm";

function App() {
  return (
    <div className="App">
    <Navbar title="TextUtils" aboutText="About TextUtils"/>
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze"/>
    </div>
    </div>
  );
}

export default App;
