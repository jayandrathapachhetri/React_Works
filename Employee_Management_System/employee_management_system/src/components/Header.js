import React from "react";
import { Link } from "react-router-dom";
import "./App.css";


function Header() {
  // const navigate = useNavigate();
  return (
    <div id="header">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1 id="logo">Company Name</h1>
          </div>
          <div className=" col-md-8">
            <ul id="menu" className="float-md-right">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/about">About</Link>
              </li>
              <li>
              <Link to="/service">Service</Link>
              </li>
              <li>
              <Link to="/contactus">ContactUs</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
