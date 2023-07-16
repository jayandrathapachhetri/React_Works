import "./App.css";
import Navbar from "./Navbar.js";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#153003";
      showAlert("Dark mode has been enable", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <div className="App">
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      <Router>
      <Navbar
        title="TextUtils"
        // aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
       
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        
      </div>
      </Router>
    </div>
  );
}

export default App;
