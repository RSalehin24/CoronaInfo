import '../App.css';
import React, {useState} from "react";

const Country = (props) => {
    const [details, setdetails] = useState(false);

    const inputStyle = {
        color: "#635353",
        fontSize: "20px"
    }
    const hStyle = {
        color: "#635353",
    }

    return(
        
        <>
            <div className='App'>
                <div className='data' >
                    <h2 style={hStyle}>Name: {props.data.country}</h2><br></br>
                    <label style={inputStyle}>New Cases: {props.data.cases.new}</label><br></br>
                    <label style={inputStyle}>New Deaths: {props.data.deaths.new}</label><br></br>
                    <label style={inputStyle}>Date: {props.data.day}</label>
                    <br></br><br></br>
                    {
                        details ? 
                        <>
                            <h3 style={hStyle}>Cases:</h3>
                            <label style={inputStyle}>Active: {props.data.cases.active}</label><br></br>
                            <label style={inputStyle}>Critical: {props.data.cases.critical}</label><br></br>
                            <label style={inputStyle}>Recovered: {props.data.cases.recovered}</label><br></br>
                            <label style={inputStyle}>Total: {props.data.cases.total}</label><br></br>
                            <br></br>
                            <h3 style={hStyle}>Deaths:</h3>
                            <label style={inputStyle}>Total: {props.data.deaths.total}</label><br></br>
                            <br></br>
                            <h3 style={hStyle}>Tests:</h3>
                            <label style={inputStyle}>Total: {props.data.tests.total}</label>
                            <br></br><br></br><br></br>
                            <label style={inputStyle}>Date and Time: {props.data.time}</label>
                            <br></br><br></br><br></br>
                            <button style={inputStyle} onClick={() => setdetails(false)}>hide Details</button>
                            <br></br><br></br><br></br>
                        </>
                        :
                        <button style={inputStyle} onClick={() => setdetails(true)}>Load Details</button>
                    }
                </div>
            </div>
        </>
    )
}

export default Country;