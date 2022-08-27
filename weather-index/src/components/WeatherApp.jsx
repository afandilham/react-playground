import React, { useState, useEffect, useCallback, Suspense } from "react";
import WeatherProvider from "../context/WeatherProvider";
import WeatherPin from "./pin/WeatherPin";
import classes from "./WeatherApp.module.css";
import WeatherContent from "./WeatherContent";
import WeatherSearch from "./WeatherSearch";
import Modal from "./ui/Modal";

const Loading = React.lazy(() => import("./ui/Loading"));

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCurrentWeather = useCallback(
    async (latitude = "57", longitude = "-2.15") => {
      const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
        import.meta.env.VITE_API_KEY
      }`;
      const pollutionWeatherUrl = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=57&lon=-2.15&appid=${
        import.meta.env.VITE_API_KEY
      }`;
      try {
        setIsLoading(true);
        const response = await Promise.all([
          fetch(currentWeatherUrl),
          fetch(pollutionWeatherUrl),
        ]);
        const currentWeatherData = await response[0].json();
        const pollutionWeatherData = await response[1].json();

        // Check Air pollution based on index
        let airQuality;
        let pollutionIndex = pollutionWeatherData.list[0].main.aqi;
        if (pollutionIndex === 1) {
          airQuality = "good";
        }

        if (pollutionIndex === 2) {
          airQuality = "Fine";
        }

        if (pollutionIndex === 3) {
          airQuality = "Moderated";
        }

        if (pollutionIndex === 4) {
          airQuality = "Poor";
        }

        if (pollutionIndex === 5) {
          airQuality = "Very poor";
        }

        const weatherData = {
          coord: currentWeatherData.coord,
          description: currentWeatherData.weather.map(
            (data) => data.description
          ),
          icon: currentWeatherData.weather.map((data) => data.icon),
          humidity: currentWeatherData.main.humidity,
          temperature: currentWeatherData.main.temp,
          wind_speed: currentWeatherData.wind.speed,
          city: currentWeatherData.name,
          country: currentWeatherData.sys.country,
          quality: airQuality,
        };
        setWeatherData(weatherData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(true);
      }
    }
  );

  useEffect(() => {
    fetchCurrentWeather();
  }, []);

  const onSubmitSearch = (latitude, longitude) => {
    fetchCurrentWeather(latitude, longitude);
  };

  const hideError = () => {
    setError(false);
  };

  return (
    <WeatherProvider>
      {loading && <Loading />}
      <div className="container">
        <WeatherSearch submitSearch={onSubmitSearch} />
        <div className={classes.weather}>
          <WeatherContent weather={weatherData} />
        </div>
        <WeatherPin />
      </div>
      <Modal isOpen={error} hideModal={hideError}>
        <h3>Wrong latitude or longitude</h3>
      </Modal>
    </WeatherProvider>
  );
};

export default WeatherApp;
