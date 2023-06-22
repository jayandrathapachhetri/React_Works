import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetail = () => {
    const {empid} = useParams();
    // empty object
    const[empdata, setdatachange] = useState({});

    return(
        <div>
            <h1>hello</h1>
        </div>
    )
}
export default EmpDetail;