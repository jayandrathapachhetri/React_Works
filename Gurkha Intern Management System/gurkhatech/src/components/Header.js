// import './App.css';
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <div className="Header">
      <Navbar bg="dark" data-bs-theme="dark">
        <Navbar.Brand href="#home">Gurkha</Navbar.Brand>
        <Nav className="me-auto nav_bar_wrapper">
          {localStorage.getItem("user-info") ? (
            <>
              {/* <Link to="/">Home</Link> */}
              <Link to="add">AddIntern</Link>
            </>
          ) : (
            <>
              <Link to="login">logIn</Link>
              <Link to="register">Register</Link>
            </>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
