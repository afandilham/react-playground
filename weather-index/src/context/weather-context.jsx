import { createContext } from "react";

const WeatherContext = createContext({
  pins: [],
  addPin: (item) => {},
  removeFromPin: (item) => {},
});

export default WeatherContext;