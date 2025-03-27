import React, { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const Forecast = () => {
  const { forecast } = useContext(WeatherContext);

  if (!forecast) return <p>Loading forecast...</p>;

  return (
    <div className="forecast">
      <h3>📅 Hourly Forecast</h3>
      <div className="forecast-container">
        {forecast.slice(0, 5).map((data, index) => (
          <div key={index} className="forecast-item">
            <p>{new Date(data.dt * 1000).toLocaleTimeString()}</p>
            <p>🌡️ {Math.round(data.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
