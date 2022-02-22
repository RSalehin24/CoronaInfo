import '../App.css';
import React, {useEffect, useState} from "react";
import Country from './Country';

const GetHistory = (props) => {
    const [data, setdata] = useState({});
    const [loading, setloading] = useState(true);

    useEffect(()=>{
        const url="https://covid-193.p.rapidapi.com/history?country="+props.country+"&day="+props.day;
        
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
                setdata(value.response[0]);
            })
        })
        .catch(err => {
            console.error(err);
        })
        .finally(()=>{
            setloading(false);
        });
    }, [setdata]);

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
            <Country data={data}/>
            </>
        } 
        </>

    )

}

export default GetHistory;