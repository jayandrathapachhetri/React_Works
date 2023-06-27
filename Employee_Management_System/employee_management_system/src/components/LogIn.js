import {useEffect} from "react"
import { useNavigate } from "react-router-dom"

function LogIn(){
    const logIn =()=>{
      // key = login
        localStorage.setItem("logIn", true)
        navigate('/')
    }

    const navigate = useNavigate();

    useEffect(() =>{
        let logIn = localStorage.getItem('logIn');
        if (logIn){
            navigate('/')
        }
    });

    return(
        <div>
            <h1>Login Page</h1>
            <input type="text" /> <br/> 
            <input type="text" /> <br/>
            <button onClick={logIn}>LogIn</button>
        </div>
    )
}

export default LogIn;
