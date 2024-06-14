import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "http://api.openweathermap.org/data/2.5/weather?";
  const API_KEY = "80d7e164f4767c7235fbd8011ae7b0d3";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelslike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox bg-gray-100 p-4 rounded-lg shadow-md">
      <nav className="flex justify-between items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-4 mb-4 rounded-t-lg">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold mr-10">WeatherApp</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-3 py-1 rounded-md bg-white text-gray-800 hover:bg-gray-200 transition-colors duration-300">
            Home
          </button>
          <button className="px-3 py-1 rounded-md bg-white text-gray-800 hover:bg-gray-200 transition-colors duration-300">
            About
          </button>
          <button className="px-3 py-1 rounded-md bg-white text-gray-800 hover:bg-gray-200 transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </nav>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit" onClick={getWeatherInfo}>
          Search
        </Button>
        <br />
        {error && (
          <p style={{ color: "red", marginTop: "0.5rem" }}>
            No such place exists
          </p>
        )}
      </form>
    </div>
  );
}
