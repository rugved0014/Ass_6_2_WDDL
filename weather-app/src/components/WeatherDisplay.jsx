import React, { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const WeatherDisplay = () => {
  const { weather } = useContext(WeatherContext);

  if (!weather) return <p>Loading...</p>;

  return (
    <div className="weather-display">
      <h2>📍 {weather.name}</h2>
      <p>{weather.weather[0].description}</p>
      <h3>🌡️ {Math.round(weather.main.temp)}°C</h3>
    </div>
  );
};

export default WeatherDisplay;
