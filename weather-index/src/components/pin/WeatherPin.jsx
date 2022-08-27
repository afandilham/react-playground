import React, { useCallback, useState, useContext } from "react";
import WeatherContext from "../../context/weather-context";
import Modal from "../ui/Modal";
import WeatherItem from "./WeatherItem";
import convertCelsius from "../../utils/convertCelsius";
import convertDate from "../../utils/convertDate";
import { Icon } from "@iconify/react";
import classes from "./WeatherPin.module.css";


const WeatherPin = () => {
  const weatherCtx = useContext(WeatherContext);
  const [selectedWeather, setSelectedWeather] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  
  const Header = selectedWeather.map((data) => (
    <div className={classes.header} key={data.id}>
      <img
        src={`https://openweathermap.org/img/wn/${data.icon}@4x.png`}
        alt="weather-icon"
      />
      <div className={classes.title}>
        <h2>{data.city}</h2>
        <span>{data.description}</span>
      </div>
    </div>
  ));

  const Content = selectedWeather.map((data) => (
    <div className={classes["descriptions-control"]} key={data.id}>
      <h3>{data.title}</h3>
      <p>{data.value}</p>
      <div className={classes["more-information"]}>
        <div className={classes.info}>
          <h4>Longitude</h4>
          <span>{data.lon}</span>
        </div>
        <div className={classes.info}>
          <h4>Latitude</h4>
          <span>{data.lat}</span>
        </div>
        <div className={classes.info}>
          <h4>Temperature</h4>
          <span>{convertCelsius(data.temperature)}&#8451;</span>
        </div>
        <div className={classes.info}>
          <h4>Humidity</h4>
          <span>{data.humidity}</span>
        </div>
        <div className={classes.info}>
          <h4>Wind speed</h4>
          <span>{data.wind_speed}</span>
        </div>
        <div className={classes.info}>
          <h4>Day</h4>
          <span>{convertDate(data.created_at)}</span>
        </div>
      </div>
    </div>
  ));

  const openModal = useCallback((id) => {
    // Search weather data by id
    const filteredWeather = weatherCtx.pins.filter((data) => data.id === id);
    setSelectedWeather(filteredWeather);
    setIsOpen(true);
  });

  const hideModal = () => {
    setIsOpen(false);
  };

  const removeWeatherPin = (id) => {
    weatherCtx.removeFromPin(id);
  };

  return (
    <div className={classes.pin}>
      {weatherCtx.pins.map((data) => (
        <WeatherItem
          key={data.id}
          data={data}
          id={data.id}
          city={data.city}
          icon={data.icon}
          day={convertDate(data.created_at)}
          onRemoveWeatherPin={removeWeatherPin.bind(null, data.id)}
          onOpenModal={openModal.bind(null, data.id)}
        />
      ))}

      <Modal hideModal={hideModal} isOpen={isOpen}>
        <button className={classes["content-button"]} onClick={hideModal}>
          <Icon icon="akar-icons:circle-x" height="20" />
        </button>
        {Header}
        <div className={classes.descriptions}>{Content}</div>
      </Modal>
    </div>
  );
};

export default WeatherPin;
