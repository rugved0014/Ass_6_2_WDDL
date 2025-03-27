import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const WeatherContext = createContext();

const API_KEY = "YOUR_OPENWEATHER_API_KEY";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState("New York");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const weatherUrl = `${BASE_URL}/weather?q=${location}&units=metric&appid=${API_KEY}`;
        const forecastUrl = `${BASE_URL}/forecast?q=${location}&units=metric&appid=${API_KEY}`;

        const weatherRes = await axios.get(weatherUrl);
        const forecastRes = await axios.get(forecastUrl);

        setWeather(weatherRes.data);
        setForecast(forecastRes.data.list);

        localStorage.setItem("cachedWeather", JSON.stringify(weatherRes.data));
        localStorage.setItem("cachedForecast", JSON.stringify(forecastRes.data.list));
      } catch (error) {
        setWeather(JSON.parse(localStorage.getItem("cachedWeather")));
        setForecast(JSON.parse(localStorage.getItem("cachedForecast")));
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location]);

  return (
    <WeatherContext.Provider value={{ weather, forecast, loading, setLocation }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
