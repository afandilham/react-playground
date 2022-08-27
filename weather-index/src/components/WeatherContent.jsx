import React, { useContext } from "react";
import Widget from "./ui/Widget";
import { Icon } from "@iconify/react";
import classes from "./WeatherContent.module.css";
import WeatherContext from "../context/weather-context";
import Button from "./ui/Button";
import convertCelsius from "../utils/convertCelsius";

const WeatherContent = (props) => {
  const weatherCtx = useContext(WeatherContext);

  const contentData = [
    {
      icon: "carbon:humidity",
      title: "Humidity",
      descriptions: `${props.weather.humidity}%`,
    },
    {
      icon: "fa-solid:wind",
      title: "Wind speed",
      descriptions: `${props.weather.wind_speed} km / h`,
    },
    {
      icon: "material-symbols:air-purifier-gen",
      title: "Air Quality",
      descriptions: `${props.weather.quality}`,
    },
  ];

  const content = contentData.map((value) => (
    <Widget key={value.title}>
      <div className={classes.content}>
        <Icon icon={value.icon} height="30px" />
        <div className={classes.desc}>
          <span>{value.title}</span>
          <p>{value.descriptions}</p>
        </div>
      </div>
    </Widget>
  ));

  const submitHandler = (event) => {
    event.preventDefault();

    weatherCtx.addPin({
      lon: props.weather.coord.lon,
      lat: props.weather.coord.lat,
      description: props.weather.description[0],
      icon: props.weather.icon[0],
      humidity: props.weather.humidity,
      temperature: props.weather.temperature,
      wind_speed: props.weather.wind_speed,
      city: props.weather.city,
      quality: props.weather.quality,
      country: props.weather.country,
    });
  };
  return (
    <>
      <Widget>
        <img
          src={`https://openweathermap.org/img/wn/${props.weather.icon}@4x.png`}
          alt="weather-icon"
        />
        <form onSubmit={submitHandler} className={classes.button}>
          <Button>
            <Icon icon="eos-icons:pin-outlined" height="16" />
          </Button>
        </form>
        <h1>{convertCelsius(props.weather.temperature)}&#xb0;</h1>
        <h2>{props.weather.city}, {props.weather.country}</h2>
        <span>{props.weather.description}</span>
      </Widget>
      <div>{content}</div>
    </>
  );
};

export default WeatherContent;
