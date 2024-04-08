import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherInfo(){ 
 const [weatherInfo,setWeatherInfo]=useState({ 
            city:"Delhi",
            temp:32,
            tempMin:23,
            tempMax:34,
            humidity:47,
            feelsLike:"feels like snovy",
            weather:"haze",
 }); 
 let updateData=(newInfo)=>{
    setWeatherInfo(newInfo);
};
    return(
        <div>
        <SearchBox updateData={updateData}/>
        <InfoBox info={weatherInfo}/>
        </div>
    );
}