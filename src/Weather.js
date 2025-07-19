import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [bgImage, setBgImage] = useState('');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a79ffc56ec464b20402e7a492ce58e80&units=metric`
      );
      setWeather(response.data);
      setBgImage(`https://source.unsplash.com/600x400/?${city},weather`);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div
      className='weather-container'
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='weather-overlay'>
        <input
          type='text'
          placeholder='Enter City Name'
          value={city}
          onChange={handleCityChange}
        />
        <br />
        <button onClick={fetchWeather}>Get Weather</button>

        {weather && (
          <div className='weather-info fade-in'>
            <h3>{weather.name}</h3>
            <p>🌡️ Temp: {weather.main.temp}°C</p>
            <p>🌤️ {weather.weather[0].description}</p>
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt='weather icon'
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
