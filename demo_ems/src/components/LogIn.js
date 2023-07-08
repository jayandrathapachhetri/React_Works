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

import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from "./Header";

function LogIn() {

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
          // eslint-disable-next-line react-hooks/exhaustive-deps
          navigate('/about');
        }
      },[])

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();


    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     fetch('http://localhost:3000/employee', values)
    //     .then(res => {
    //         if(res.data.Status === 'Success') {
    //             navigate('/about');
    //         } else {
    //             setError(res.data.Error);
    //         }
    //     })
    //     .catch(err => console.log(err));
    // }

    async function login() {
        let data = {email, password };
    
        let result = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(data)
          });
          result=await result.json();
        //   console.warn("result",result)
          localStorage.setItem('user-info',JSON.stringify(result));
          navigate('/about')
          // navigate('/header');
      }

    return (
        // <><Header/>
        // <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        //     <div className='p-3 rounded w-25 border loginForm'>
        //         <div className='text-danger'>
        //             {error && error}
        //         </div>
        //         <h2><strong>Login</strong> </h2>
        //         <form onSubmit={handleSubmit}>
        //             <div className='mb-3'>
        //                 {/* <label htmlFor="email"><strong>Email</strong></label> */}
        //                 <input type="email" placeholder='Enter Email' name='email' 
        //                   onChange={e => setValues({...values, email: e.target.value})} className='form-control rounded-0' autoComplete='off'/>
        //             </div>
        //             <div className='mb-3'>
        //                 {/* <label htmlFor="password"><strong>Password</strong></label> */}
        //                 <input type="password" placeholder='Enter Password' name='password'
        //                   onChange={e => setValues({...values, password: e.target.value})} className='form-control rounded-0' />
        //             </div>
        //             <button type='submit' className='btn btn-success w-100 rounded-0' onClick={() => navigate("/header")}> Log in</button>
        //             <p>You are agree to our terms and policies</p>
  
        //             <div className='sign'>
        //             <label>Don't have an account</label>
        //             <Link to="/register">Sign Up</Link>
        //             </div>
        //         </form>
        //     </div>
        // </div>
        // </>

        <>
<Header/>
<div className='d-flex justify-content-center align-items-center vh-100 signupPage'>
<div className='p-3 rounded w-25 border signupForm'>
    <h2><strong>Gurkha Intern</strong></h2>
    <form>
        <div className='mb-3'>
            {/* <label htmlFor="email"><strong>Email</strong></label> */}
            <input type="text" name="email" placeholder ="Email" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control rounded-0' autoComplete='off'/>
        </div>
        <div className='mb-3'>
            {/* <label htmlFor="password"><strong>Password</strong></label> */}
            <input type="text" name="password" placeholder =" Password" value={password} onChange={(e) => setPassword(e.target.value)} className='form-control rounded-0' />
        </div>
        <button type="button" onClick={login} className='btn btn-success w-100 rounded-0'> LogIn</button>

    </form>
</div>
</div>
</>
    )
}

export default LogIn;


