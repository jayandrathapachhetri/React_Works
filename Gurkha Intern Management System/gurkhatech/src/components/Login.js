import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Login() {
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('user-info')){
      // eslint-disable-next-line react-hooks/exhaustive-deps
      navigate('/add');
    }
  },[])


  return (
    <>
    <Header />
      <h1>Login</h1>
      </>
  );
}

export default Login;
