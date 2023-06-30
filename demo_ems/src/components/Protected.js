import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import SignUp from './SignUp';

function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let logIn = localStorage.getItem('logIn');
    if (!logIn) {
      navigate('/logIn');
    }
  });

  useEffect(() => {
    let signUp = localStorage.getItem('SignUp');
    if (!signUp) {
      navigate('/SignUp');
    }
  });

  return (
    <div>
      jay
      <Component />
    </div>
  );
}

export default Protected;
