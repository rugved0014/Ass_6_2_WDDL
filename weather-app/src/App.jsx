import React, { useContext } from "react";
import WeatherContext from "./context/WeatherContext";
import WeatherDisplay from "./components/WeatherDisplay";
import Forecast from "./components/Forecast";
import LocationButton from "./components/LocationButton";
import ChartComponent from "./components/ChartComponent";
import "./styles/index.css";

const App = () => {
  const { weather, forecast, loading } = useContext(WeatherContext);

  return (
    <div className="app-container">
      <h1>🌤️ Weather App</h1>
      <LocationButton />
      {loading ? <p>Loading...</p> : <WeatherDisplay />}
      <Forecast />
      <div className="chart-container">
        <ChartComponent />
      </div>
    </div>
  );
};

export default App;
