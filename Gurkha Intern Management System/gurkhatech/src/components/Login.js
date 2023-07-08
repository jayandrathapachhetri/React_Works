import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Login() {
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  async function login() {
    console.warn('data', email, password);
    let item = { email, password };

    let result =  await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    //   console.warn("result",result)
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/add");
  }
  

  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center vh-100 signupPage">
        <div className="p-3 rounded w-25 border signupForm">
          <h2>
            <strong>Gurkha Intern</strong>
          </h2>
          <form>
            <div className="mb-3">
              {/* <label htmlFor="email"><strong>Email</strong></label> */}
              <input
                type="text"
                // name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control rounded-0"
                autoComplete="off"
              />
            </div>
            <div className="mb-3">
              {/* <label htmlFor="password"><strong>Password</strong></label> */}
              <input
                type="text"
                // name="password"
                placeholder=" Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control rounded-0"
              />
            </div>
            <button
              type="button"
              onClick={login}
              className="btn btn-success w-100 rounded-0"
            >
              LogIn
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
