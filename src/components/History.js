import '../App.css';
import React, {useEffect, useState} from "react";
import Country from './Country';

const History = () => {

    const h3Style = {
        color: "#635353",
        
    };

    const buttonStyle = {
        color: "#635353",
        fontSize: "15px"
    };

    const inputStyle = {
        color: "#635353",
        fontSize: "14px"
    }

    const [day, setday] = useState('2022-01-31');
    const [country, setcountry] = useState('');
    const [click, setclick] = useState(false);
    
    return (
        <>
        {  !click ?
            
            <div className='App'>
                <h2>History</h2>
                <div className="inputform">
                    <form>
                        <h3 style={h3Style}>Submit Info below to know the COVID Situation</h3>
                            <div className="inputInfo">
                                <div className="latlong">
                                    <label style={h3Style}>Country: </label>
                                    <input style={inputStyle} type="text" name="latitude" value={country} onChange={(e) => setcountry(e.target.value)} required/>
                                    <br></br>
                                    <label style={h3Style}>Day: </label>
                                    <input style={inputStyle} type="date" name="longitude" value={day} onChange={(e) => setday(e.target.value)}/>
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
                <Country country={country} day={day}/>
            </>
            
        }
        </>
    )
}

export default History;