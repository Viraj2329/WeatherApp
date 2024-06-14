import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city : "Delhi",
        feelslike : 35.02,
        temp : 34.05,
        tempMin : 34.05,
        tempMax : 34.05,
        humidity : 38,
        weather : "haze",
    },);

    let updateInfo = ((newInfo) => {
        setWeatherInfo(newInfo);
    });

    return (
        <div style={{textAlign : "center"}}>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    )
}