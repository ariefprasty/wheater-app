import { useState } from "react";
import "./App.css";
import { currentWeatherurl, WEATHER_API_KEY } from "./api";
import CurrentWeather from "./components/current-weather/current-weather";
import Search from "./components/search/search";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const handleOnSerchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${currentWeatherurl}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${currentWeatherurl}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    Promise.all([currentWeatherFetch, forecastFetch]).then(async (Response) => {
      const weatherResponse = await Response[0].json();
      const forecastResponse = await Response[1].json();
      setCurrentWeather({ city: searchData.label, ...weatherResponse });
      setForecastWeather({ city: searchData.label, ...forecastResponse });
    });
  };

  console.log(currentWeather);
  console.log(forecastWeather);
  return (
    <div className="container">
      <Search onSearchChange={handleOnSerchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default App;
