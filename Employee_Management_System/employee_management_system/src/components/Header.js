import React from "react";
import { Link } from "react-router-dom";
import "../App.css";


function Header() {
  return (
    <div className="Header">
      <ul className="header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <li>
          <Link to="/login">LogIn</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/edit">Edit</Link>
        </li>
        <li>
          <Link to="/Contactus">ContactUs</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
