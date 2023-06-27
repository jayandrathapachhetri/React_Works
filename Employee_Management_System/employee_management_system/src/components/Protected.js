import {useEffect} from "react"
import { useNavigate } from "react-router-dom"


function Protected(props){
    const {Component} = props;
    const navigate = useNavigate();

    useEffect(() =>{
        let logIn = localStorage.getItem('logIn');
        if (!logIn){
            navigate('/logIn')
        }
    });


    return(
        <div>
            jay
            <Component/>
        </div>
    )
}

export default Protected;
