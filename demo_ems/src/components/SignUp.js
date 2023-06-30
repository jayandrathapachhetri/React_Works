import React, { useState} from 'react';
import { useNavigate  } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  
  function saveData() {
    let data = { name, email, password };

    fetch('http://localhost:3000/employee', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((resp) => {
      resp.json().then((result) => {
        console.warn('result', result);
        navigate('/login');
      });
    });
  }


  return (
    // <div className="SignUp">
    //   <h1>SignIn Page</h1>
    //   <input type="text" name="name" placeholder =" name" value={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />
    //   <input type="text" name="email" placeholder =" email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
    //   <input type="text" name="password" placeholder =" password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br /> <br />
    //   <button type="button" onClick={saveData}>Submit</button>
    // </div>

<div className='d-flex justify-content-center align-items-center vh-100 signupPage'>
<div className='p-3 rounded w-25 border signupForm'>
    <h2><strong>SignUP</strong></h2>
    <form>
        <div className='mb-3'>
            {/* <label htmlFor="email"><strong>Name</strong></label> */}
            < input type="text" name="name" placeholder =" name" value={name} onChange={(e) => setName(e.target.value)} className='form-control rounded-0' autoComplete='off'/>
        </div>
        <div className='mb-3'>
            {/* <label htmlFor="email"><strong>Email</strong></label> */}
            <input type="text" name="email" placeholder =" email" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control rounded-0' autoComplete='off'/>
        </div>
        <div className='mb-3'>
            {/* <label htmlFor="password"><strong>Password</strong></label> */}
            <input type="text" name="password" placeholder =" password" value={password} onChange={(e) => setPassword(e.target.value)} className='form-control rounded-0' />
        </div>
        <button type="button" onClick={saveData} className='btn btn-success w-100 rounded-0'> sign Up</button>

    </form>
</div>
</div>
  );
}

export default SignUp;

