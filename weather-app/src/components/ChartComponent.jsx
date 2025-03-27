import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import WeatherContext from "../context/WeatherContext";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ChartComponent = () => {
  const { forecast } = useContext(WeatherContext);

  if (!forecast) return null;

  const labels = forecast.slice(0, 5).map((data) => new Date(data.dt * 1000).toLocaleTimeString());
  const temperatures = forecast.slice(0, 5).map((data) => data.main.temp);

  const data = {
    labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temperatures,
        borderColor: "#ffcc00",
        backgroundColor: "rgba(255, 204, 0, 0.3)",
        fill: true,
      },
    ],
  };

  return <div className="chart-container"><Line data={data} /></div>;
};

export default ChartComponent;
