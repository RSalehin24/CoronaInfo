import '../App.css';
import React from "react";
import {useNavigate} from 'react-router-dom'



const FirstPage = () => {
    let navigate = useNavigate();

    const buttonStyle = {
        color: "#635353",
        fontSize: "30px"
    };

    return(
        <div className='App'>
            <h1>COVID Info</h1>
            <button style={buttonStyle} onClick={() => {navigate("/history")}}>History</button>
        </div>
    )
}

export default FirstPage;