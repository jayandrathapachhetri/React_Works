import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Register() {
  
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('user-info')){
      // eslint-disable-next-line react-hooks/exhaustive-deps
      navigate('/add');
    }
  },[navigate])

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  async function signUP() {
    let item = { name, email, password };

    let result = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    console.warn("result", result);
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate('/add');
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
              {/* <label htmlFor="email"><strong>Name</strong></label> */}
              <input
                type="text"
                name="name"
                placeholder=" name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control rounded-0"
                autoComplete="off"
              />
            </div>
            <div className="mb-3">
              {/* <label htmlFor="email"><strong>Email</strong></label> */}
              <input
                type="text"
                name="email"
                placeholder=" email"
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
                name="password"
                placeholder=" password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control rounded-0"
              />
            </div>
            <button
              type="button"
              onClick={signUP}
              className="btn btn-success w-100 rounded-0"
            >
              sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
