// import './App.css';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link , useNavigate} from "react-router-dom";
import "../App.css";

function Header() {
  const user = JSON.parse(localStorage.getItem('user-info'));
  console.warn(user)

  const navigate = useNavigate();
  function logout(){
    // localStorage.removeItem('user-info');
    localStorage.clear();
    navigate('register')
  }
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
            {/* <NavDropdown title={user.name}>
              <NavDropdown.Item onClick={logout}>logout</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </NavDropdown> */}
            {user && user.name && (
          <NavDropdown title={user.name}>
            <NavDropdown.Item onClick={logout}>logout</NavDropdown.Item>
            <NavDropdown.Item>Profile</NavDropdown.Item>
          </NavDropdown>
        )}
      </Navbar>
    </div>
  );
}

export default Header;