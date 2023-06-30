// import {useEffect} from "react"
import { Link, useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Login Page</h1>
      <input type="text" /> <br />
      <input type="text" /> <br />
      <button onClick={() => navigate("/header")}>LogIn</button>
      <label>Don't have an account</label>
      <Link to="/signUp">Sign Up</Link>
    </div>
  );
}

export default LogIn;
