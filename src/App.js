import './App.css';
import Search from './components/search/search';
import Weather from './components/current-weather/weather';
import Forecast from './components/forecast/forecast';
import { current_weather } from './api';
import { weather_api_key } from './api';
import { useState } from 'react';
function App() {
  const [currentWeather, setCurrentWeather] = useState();
  const [forecast, setForecast] = useState();
  const handleOnChange = (searchData) => {

    const [latitude, longitude] = searchData.value.split(" ");
    const currentweather = fetch(`${current_weather}/weather?lat=${latitude}&lon=${longitude}&appid=${weather_api_key}&units=metric`);
    const fore = fetch(`${current_weather}/forecast?lat=${latitude}&lon=${longitude}&appid=${weather_api_key}&units=metric`);

    Promise.all([currentweather, fore])
      .then(async(response) => {
        const weather_response = await response[0].json();
        const weather_forecast = await response[1].json();

        setCurrentWeather({city: searchData.label, ...weather_response});
        setForecast({city: searchData.label, ...weather_forecast});
      })
      .catch((err) => {console.log(err)});
  }

  return (
    <div className="container">
      <Search onSearchChange = {handleOnChange}/>
      {currentWeather && <Weather data={currentWeather}/>}
      {forecast && <Forecast data = {forecast}/>}
    </div>
  );
}

export default App;
