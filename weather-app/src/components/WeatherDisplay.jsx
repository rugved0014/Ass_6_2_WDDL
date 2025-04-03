import React, { useContext, useState } from "react";
import WeatherContext from "../context/WeatherContext";

const WeatherDisplay = () => {
  const { weather, setLocation } = useContext(WeatherContext);
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      setLocation(city);
      setCity(""); // Clear input field
    }
  };

  if (!weather) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="flex flex-col items-center bg-blue-500 text-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      {/* 🔍 Search Bar */}
      <form onSubmit={handleSearch} className="flex w-full mb-4">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 p-2 rounded-l-lg text-black focus:outline-none"
        />
        <button 
          type="submit"
          className="bg-white text-blue-500 px-4 py-2 rounded-r-lg font-semibold hover:bg-gray-200 transition"
        >
          🔍
        </button>
      </form>

      {/* 🌍 Weather Info */}
      <h2 className="text-2xl font-bold">{weather.name}</h2>
      <p className="capitalize">{weather.weather[0].description}</p>
      <h3 className="text-3xl font-semibold mt-2">🌡️ {Math.round(weather.main.temp)}°C</h3>
    </div>
  );
};

export default WeatherDisplay;
