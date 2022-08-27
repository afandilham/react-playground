import React from "react";
import { Icon } from "@iconify/react";
import classes from "./WeatherItem.module.css";
import Modal from "../ui/Modal";

const WeatherItem = (props) => {
  const removeWeather = (event) => {
    event.preventDefault();
    props.onRemoveWeatherPin(props.id);
  };

  return (
    <div className={classes.item} key={props.id}>
      <div className={classes["button-group"]}>
        <form onSubmit={removeWeather}>
          <button className={`${classes.button} ${classes["button-left"]}`}>
            <Icon icon="fluent:delete-12-filled" height="15" />
          </button>
        </form>
        <button
          className={`${classes.button} ${classes["button-right"]}`}
          onClick={props.onOpenModal}>
          <Icon icon="bi:eye-fill" height="15" />
        </button>
      </div>
      <img
        src={`https://openweathermap.org/img/wn/${props.icon}@4x.png`}
        alt="weather-icon"
      />
      <h4>{props.city}</h4>
      <span>{props.day}</span>
    </div>
  );
};

export default WeatherItem;
