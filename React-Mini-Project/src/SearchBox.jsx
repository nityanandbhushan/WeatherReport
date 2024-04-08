import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateData}){ 
    
    let [city,setCity]=useState("");
    let [err,setErr]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="5ee37738aa1bcf43ec6f6f8708e1c0b5";

    let getWeatherInfo=async()=>{ 

        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
            let jsonResponse=await response.json();
            console.log(jsonResponse);
            let result={
                city:jsonResponse.name,
                temp:jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                feelsLike:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;

        }
        catch{ 
            throw err;
        }
       
       
    }

    let handleChange=(evt)=>{ 
        setCity(evt.target.value);
    }
    let handleSubmit= async(evt)=>{ 
        try{ 
            evt.preventDefault();
            console.log(city);
            setCity("");
           let newInfo=await  getWeatherInfo();
           updateData(newInfo);
           setErr("");

        }
        catch{ 
            setErr(true);
        }
      
    }
    return( 
        <div className='boxBody'>
            <h2>Search for the weather</h2>
            <form onSubmit={handleSubmit}>
                <div>  <TextField onChange={handleChange} id="city" label="City Name" variant="outlined" value={city} required/></div>
                <br></br>
              <div> <Button  type='Submit' variant="contained">Search</Button></div>
              { err && <p style={{color:"red"}}>No such place exists!</p>}

            </form>
        </div>
    );
   
}