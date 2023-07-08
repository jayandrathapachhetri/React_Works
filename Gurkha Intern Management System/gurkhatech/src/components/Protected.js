import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import SignUp from './SignUp';

function Protected(props) {
  let Component  = props.Component;
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('user-info')) {
      navigate('/register');
    }
  },[]);

  return (
    <div>
      <Component />
    </div>
  );
}

export default Protected;
