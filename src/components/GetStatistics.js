import '../App.css';
import React, {useEffect, useState} from "react";
import Country from './Country';

const GetStatistics = (props) => {
    const [data, setdata] = useState([]);
    const [singleCountry, setCountry] = useState({})
    const [loading, setloading] = useState(true);
    const [isCountry, setIsCountry] = useState(false);
    var divKey = 0;

    if(props.country===''){
        var url="https://covid-193.p.rapidapi.com/statistics";
    } else {
        url="https://covid-193.p.rapidapi.com/statistics?country="+props.country; 
    }

    const compare = (a,b) => {
        return b.population - a.population;
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
                if(props.country ===''){
                    if(data.length===0){
                        setdata(value.response);
                    } 
                } 
                else {
                    setCountry(value.response[0]);
                    setIsCountry(true); 
                } 
            })
        })
        .catch(err => {
            console.error(err);
        })
        .finally(()=>{
            setloading(false);
        });
    }, [data]);


    const hStyle = {
        color: "#635353",
    }

    return(
        <>
        {
            loading ? 
            <>
                <div className='App'>
                    <br></br><br></br>
                    <h2 style={hStyle}> Loading data ...</h2> 
                </div>
            </>
            :
            <>
            {
                isCountry ?
                <>
                    <Country data={singleCountry}/>
                </>
                :
                <>
                {
                    data.sort(compare).map((country, index) => {
                        return(
                            <>
                                <div key={index}>
                                    <Country data={country}/>
                                    <br></br><br></br><br></br>
                                </div>
                            </>
                        )
                    })
                }
                <br></br><br></br><br></br>
                </>
            }
            </>
        } 
        </>
    )
}

export default GetStatistics;