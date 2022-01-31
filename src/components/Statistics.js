import '../App.css';
import React, {useState} from "react";
import CountryList from './CountryList';

const Statistics = () => {

    const h3Style = {
        color: "#635353",
    };

    const buttonStyle = {
        color: "#635353",
        fontSize: "20px"
    };

    const inputStyle = {
        color: "#635353",
        fontSize: "18px"
    }

    const [country, setcountry] = useState('');
    const [click, setclick] = useState(false);
    
    return (
        <>
        {  !click ?
            
            <div className='App'>
                <h2>Statistics</h2>
                <div className="inputform">
                    <form>
                        <h3 style={h3Style}>Submit Info below to know the COVID Situation</h3>
                            <div className="inputInfo">
                                <div className="latlong">
                                    <label style={inputStyle}>Country: </label>
                                    <input style={inputStyle} type="text" name="latitude" value={country} onChange={(e) => setcountry(e.target.value)} required/>
                                </div>
                            </div>
                            <br></br>
                            <div className="submitInfo">
                                <button style={buttonStyle} onClick={()=> setclick(true)}>Submit</button>
                            </div>  
                    </form>
                </div>  
            </div>

            :
            <>
                <br></br><br></br><br></br>
                <div className='App'>
                    <h1 style={h3Style}>Statistics</h1><br></br>
                    <CountryList data0={country}/>
                </div>
            </>
            
        }
        </>
    )
}

export default Statistics;