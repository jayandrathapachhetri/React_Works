import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";



function Header() {
  const navigate = useNavigate();
  return (
<div className="Header" style={{ display: 'flex',justifyContent: "center", alignItems: 'center', backgroundColor:"gray" }}>
      <ul className="header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/emplist">List</Link>
        </li>
        <li>
          <Link to="/Contactus">ContactUs</Link>
        </li>
      </ul>

      <div className="logout">
      <button onClick={() => navigate("/login")}>LOG OUT</button>
      </div>
    </div>
  );
}

export default Header;

