// import React from "react";
// import { Link } from "react-router-dom";
// import "../App.css";
// import {Nav, Navbar, NavDropdown} from 'react-bootstrap'



// function Header() {
//   return (
// <div className="Header" style={{ display: 'flex',justifyContent: "center", alignItems: 'center', backgroundColor:"gray" }}>
// <Link to="/">Gurkha</Link>
//       <ul className="header">
//        {
//          localStorage.getItem('user-info')?
//          <>
//          <li>
//            <Link to="/about">About</Link>
//          </li>
//          <li>
//            <Link to="/emplist">List</Link>
//          </li>
//          </>
//          :
//          <>
//          <li>
//            <Link to="/register">Register</Link>
//          </li>
//          <li>
//            <Link to="/login">LogIn</Link>
//          </li>
//          </>
//        }

//        <div title = "user.name">
//        <button onclick>LogOut</button>
//        </div>
      
//       </ul>


//     </div> 
//   );
// }

// export default Header;


import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
// import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function Header() {
  const Navigate = useNavigate();

  const handleLogout = () => {
    // Clear the user info from localStorage or perform any other logout actions
    localStorage.removeItem("user-info");

    // Navigate to the Signin page
    Navigate("/register");
  };

  return (
    <div
      className="Header"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
      }}
    >
      <Link to="/">Gurkha</Link>
      <ul className="header">
        {localStorage.getItem("user-info") ? (
          <>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/emplist">List</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">LogIn</Link>
            </li>
          </>
        )}

        {localStorage.getItem("user-info") && (
          <li>
            <button onClick={handleLogout}>LogOut</button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;
