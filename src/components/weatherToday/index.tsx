"use client";

import { useCtxLocation } from "@/context/ctxLocation";
import styles from "./weatherToday.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { WeatherIcon } from "../weatherIcon";
import { useCtxFahrenheit } from "@/context/ctxFahrenheit";

interface weatheDataProps {
  temperature: number;
  weatherDescription: string;
  windSpeed: number;
  humidity: number;
  pressure: number;
}

export const WeatherToday = () => {
  const { ctxLocation } = useCtxLocation();
  const [weatherData, setWeatherData] = useState<weatheDataProps>(
    {} as weatheDataProps
  );
  const { ctxFahrenheit } = useCtxFahrenheit();
  const [temperature, setTemperature] = useState(weatherData.temperature);

  //API
  useEffect(() => {
    async function api() {
      const { data } = await axios.get("/api/weatherToday", {
        params: {
          city: ctxLocation.city,
          state: ctxLocation.state,
        },
      });
      setWeatherData(data);
    }

    //In case city is not null run the function
    if (ctxLocation.city) {
      api();
    }
  }, [ctxLocation]);

  //Temperature
  useEffect(() => {
    setTemperature(weatherData.temperature);
  }, [weatherData]);
  //Celsius to F
  useEffect(() => {
    if (ctxFahrenheit) {
      const fTemp = Number(((weatherData.temperature * 9) / 5 + 32).toFixed(2));
      setTemperature(fTemp);
    } else {
      setTemperature(weatherData.temperature);
    }
  }, [ctxFahrenheit, weatherData]);

  return (
    <>
      <div
        className={`${styles.weatherToday}  ${
          weatherData.temperature < 15
            ? styles.weatherTodayBkgBlue
            : weatherData.temperature > 35
            ? styles.weatherTodayBkgRed
            : styles.weatherTodayBkgYellow
        }`}
      >
        <div className={styles.weatherTodayIcon}>
          <WeatherIcon weatherDescription={weatherData.weatherDescription} />
        </div>
        <div className={`${styles.weatherTodayData}`}>
          <p className={`${styles.weatherTodayDataToday}`}>TODAY</p>
          <p className={`${styles.weatherTodayDataTemperature}`}>
            {temperature}º{ctxFahrenheit ? "F" : "C"}
          </p>
          <p className={`${styles.weatherTodayDataDescription}`}>
            {weatherData.weatherDescription}
          </p>
          <div className={styles.weatherTodayDataNamed}>
            <p>Wind: {weatherData.windSpeed}km/h</p>
            <p>Humidity: {weatherData.humidity}%</p>
            <p>Pressure: {weatherData.pressure}hPA</p>
          </div>
        </div>
      </div>
    </>
  );
};
