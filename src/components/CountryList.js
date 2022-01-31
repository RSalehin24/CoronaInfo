import '../App.css';
import React, {useEffect, useState} from "react";

const CountryList = (data0) => {
    const [data1, setdata] = useState([]);
    const [loading, setloading] = useState(true);
    const [details, setdetails] = useState(false);

    if(data0.data0===''){
        var url="https://covid-193.p.rapidapi.com/statistics";
    } else {
        url="https://covid-193.p.rapidapi.com/statistics?country="+data0.data0;;
    }
    
    

    useEffect(()=>{
        fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "db900dc2a4msh9f79fe5058efa60p1c6f9bjsnc395558a0672"
            }
        })
        .then(response => {
            var p = Promise.resolve(response.json());
            p.then((value) => {
                if(data1.length === 0){
                    setdata(value.response);
                    setdata(data1.sort(function(a, b){return a.cases.total-b.cases.total}));
                }
            })
        })
        .catch(err => {
            console.error(err);
        })
        .finally(()=>{
            setloading(false);
        });
    })

    
    const inputStyle = {
        color: "#635353",
        fontSize: "20px"
    }
    const hStyle = {
        color: "#635353",
    }

    return(
        <>
        { loading? 
        <>
            <div className='App'>
                <br></br><br></br>
                <h2 style={hStyle}> Loading data ...</h2> 
            </div>
        </>
        : 
        <>
        <div className='App'>
            {
                data1.map((data)=>{
                    
                    <div style={
                        {
                         border: '2px solid',
                         align: 'center',
                         color: "#635353"
                        }
                      }>
                    <div className='App'>
                    <div className='data' >
                    <h2 style={hStyle}>Name: {data.country}</h2><br></br>
                    <label style={inputStyle}>New Cases: {data.cases.new}</label><br></br>
                    <label style={inputStyle}>New Deaths: {data.deaths.new}</label><br></br>
                    <label style={inputStyle}>Date: {data.day}</label>
                    <br></br><br></br>
                    {
                        details ? 
                        <>
                            <h3 style={hStyle}>Cases:</h3>
                            <label style={inputStyle}>Active: {data.cases.active}</label><br></br>
                            <label style={inputStyle}>Critical: {data.cases.critical}</label><br></br>
                            <label style={inputStyle}>Recovered: {data.cases.recovered}</label><br></br>
                            <label style={inputStyle}>Total: {data.cases.total}</label><br></br>
                            <br></br>
                            <h3 style={hStyle}>Deaths:</h3>
                            <label style={inputStyle}>Total: {data.deaths.total}</label><br></br>
                            <br></br>
                            <h3 style={hStyle}>Tests:</h3>
                            <label style={inputStyle}>Total: {data.tests.total}</label>
                            <br></br><br></br><br></br>
                            <label style={inputStyle}>Date and Time: {data.time}</label>
                            <br></br><br></br><br></br>
                        </>
                        :
                        <button style={inputStyle} onClick={() => setdetails(true)}>Load Details</button>
                    }
                    </div>
                    </div>
                
                    </div>

                    })
                
            }
        </div>
        </>
        
        }
        </>
    )
}

export default CountryList;