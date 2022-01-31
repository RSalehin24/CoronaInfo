import '../App.css';
import React from "react";
import {useNavigate} from 'react-router-dom'



const FirstPage = () => {
    let navigate = useNavigate();

    const buttonStyle = {
        color: "#635353",
        fontSize: "30px"
    };

    const hStyle = {
        color: "#635353",
        fontSize: "60px"
    };

    return(
        <div className='App'>
            <br></br>
            <br></br>
            <h1 style={hStyle}>COVID Info</h1>
            <button style={buttonStyle} onClick={() => {navigate("/history")}}>History</button>
            <br></br>
            <br></br>
            <button style={buttonStyle} onClick={() => {navigate("/statistics")}}>Statistics</button>
        </div>
    )
}

export default FirstPage;