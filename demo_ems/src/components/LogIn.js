// // import {useEffect} from "react"
// import { Link, useNavigate } from "react-router-dom";

// function LogIn() {
//   const navigate = useNavigate();

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         flexDirection: "column",
//         alignItems: "center",
//       }}
//     >
//       <h1>Login Page</h1>
//       <input type="text" /> <br />
//       <input type="text" /> <br />
//       <button onClick={() => navigate("/header")}>LogIn</button>
//       <label>Don't have an account</label>
//       <Link to="/signUp">Sign Up</Link>
//     </div>
//   );
// }

// export default LogIn;

import React, { useState } from 'react'
// import './style.css';
// import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function LogIn() {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    // axios.defaults.withCredentials = true;
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/employee', values)
        .then(res => {
            if(res.data.Status === 'Success') {
                navigate('/header');
            } else {
                setError(res.data.Error);
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-3 rounded w-25 border loginForm'>
                <div className='text-danger'>
                    {error && error}
                </div>
                <h2><strong>Login</strong> </h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        {/* <label htmlFor="email"><strong>Email</strong></label> */}
                        <input type="email" placeholder='Enter Email' name='email' 
                          onChange={e => setValues({...values, email: e.target.value})} className='form-control rounded-0' autoComplete='off'/>
                    </div>
                    <div className='mb-3'>
                        {/* <label htmlFor="password"><strong>Password</strong></label> */}
                        <input type="password" placeholder='Enter Password' name='password'
                          onChange={e => setValues({...values, password: e.target.value})} className='form-control rounded-0' />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0' onClick={() => navigate("/header")}> Log in</button>
                    <p>You are agree to our terms and policies</p>
  
                    <div className='sign'>
                    <label>Don't have an account</label>
                    <Link to="/signup">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LogIn;


