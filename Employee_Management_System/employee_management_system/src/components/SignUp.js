import React, { useState} from 'react';
import { useNavigate  } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  // const history = useHistory();
// 
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
        // Redirect to login page after successful submission
        // history.push('/login');
        
        //Navigate to login page
        navigate('/login');
      });
    });
  }


  return (
    <div className="SignUp">
      <h1>SignIn Page</h1>
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />
      <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
      <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br /> <br />
      <button type="button" onClick={saveData}>Submit</button>
    </div>
  );
}

export default SignUp;
