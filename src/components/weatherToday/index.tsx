"use client";

import { useCtxLocation } from "@/context/ctxLocation";
import styles from "./weatherToday.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { WeatherIcon } from "../weatherIcon";

interface weatheDataProps {
  temperature: number;
  weatherDescription: string;
  windSpeed: number;
  humidity: number;
  pressure: number;
}

export const WeatherToday = () => {
  //city, state
  const { ctxLocation } = useCtxLocation();
  const [weatherData, setWeatherData] = useState<weatheDataProps>(
    {} as weatheDataProps
  );

  //API
  useEffect(() => {
    async function api() {
      const { data } = await axios.get("/api/weatherToday", {
        params: {
          city: "Fortaleza",
          state: "Ceará",
          // city: ctxLocation.city,
          // state: ctxLocation.state,
        },
      });
      setWeatherData(data);
    }

    //In case city is not null run the function
    if (ctxLocation.city) {
      api();
    }
  }, [ctxLocation]);

  return (
    <>
      <div
        className={`${styles.weatherToday}  ${
          weatherData.temperature < 15
            ? styles.todaysClrBlue
            : weatherData.temperature > 35
            ? styles.todaysClrRed
            : styles.todaysClrYellow
        }`}
      >
        <div className={styles.weatherTodayIcon}>
          <WeatherIcon weatherDescription={weatherData.weatherDescription} />
        </div>
        <div className={`${styles.weatherTodayData}`}>
          <p className={`${styles.weatherTodayDataToday}`}>TODAY</p>
          <p className={`${styles.weatherTodayDataTemperature}`}>
            {weatherData.temperature}ºC
          </p>
          <p className={`${styles.weatherTodayDataDescription}`}>
            {weatherData.weatherDescription}
          </p>
          <p>{weatherData.windSpeed}km/h</p>
          <p>{weatherData.humidity}%</p>
          <p>{weatherData.pressure}hPA</p>
        </div>
      </div>
    </>
  );
};
