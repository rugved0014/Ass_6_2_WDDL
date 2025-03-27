import React, { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const LocationButton = () => {
  const { setLocation } = useContext(WeatherContext);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(`${position.coords.latitude},${position.coords.longitude}`);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return <button onClick={getLocation}>📍 Get My Location</button>;
};

export default LocationButton;
