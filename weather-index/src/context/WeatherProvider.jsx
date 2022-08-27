import { useState, useEffect } from "react";
import WeatherContext from "./weather-context";
import supabase from "../supabase/init";
import { v4 as uuidv4 } from "uuid";
import convertDate from "../utils/convertDate";

const WeatherProvider = (props) => {
  const [weather, setWeather] = useState([]);

  const fetchPins = async () => {
    const { data, error } = await supabase.from("weather").select("*");
    if (error) {
      throw new Error(error);
    }

    const loadedPins = [];

    for (const key in data) {
      loadedPins.push({
        id: data[key].id,
        lon: data[key].lon,
        lat: data[key].lat,
        description: data[key].description,
        icon: data[key].icon,
        humidity: data[key].humidity,
        temperature: data[key].temperature,
        wind_speed: data[key].wind_speed,
        city: data[key].city,
        country: data[key].country,
        created_at: data[key].created_at,
      });
    }
    setWeather(loadedPins);
  };

  useEffect(() => {
    fetchPins();
  }, []);

  const addPinHandler = async (item) => {
    const weather = {
      id: uuidv4(),
      lon: item.lon,
      lat: item.lat,
      description: item.description,
      icon: item.icon,
      humidity: item.humidity,
      temperature: item.temperature,
      wind_speed: item.wind_speed,
      city: item.city,
      air_quality: item.quality,
      country: item.country,
    };

    const { data, error } = await supabase.from("weather").insert([weather]);
    if (error) {
      throw new Error("Error occured when inserting data," + error);
    }

    setWeather((prevState) => {
      return [...prevState, data[0]];
    });
  };

  const removePinHandler = async (id) => {
    const { error } = await supabase.from("weather").delete().match({ id: id });

    // Remove data from state by id
    setWeather(weather.filter((value) => value.id !== id));

    if (error) {
      throw new Error("Error occured white removing data," + error);
    }
  };

  const weatherContext = {
    pins: weather,
    addPin: addPinHandler,
    removeFromPin: removePinHandler,
  };

  return (
    <WeatherContext.Provider value={weatherContext}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
