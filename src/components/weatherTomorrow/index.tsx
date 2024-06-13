import { useEffect, useState } from "react";
import styles from "./weatherTomorrow.module.css";
import axios from "axios";
import { useCtxLocation } from "@/context/ctxLocation";
import { useCtxFahrenheit } from "@/context/ctxFahrenheit";

interface WeatherDataProps {
  temperatureTomorrow: number;
  temperatureAfterTomorrow: number;
}

export const WeatherTomorrow = () => {
  //city, state
  const { ctxLocation } = useCtxLocation();
  const [weatherData, setWeatherData] = useState<WeatherDataProps>(
    {} as WeatherDataProps
  );

  //API
  useEffect(() => {
    async function api() {
      const { data } = await axios.get("/api/weatherTomorrow", {
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

  //temperature
  const { ctxFahrenheit } = useCtxFahrenheit();
  const [temperatureTomorrow, setTemperatureTomorrow] = useState(
    weatherData.temperatureTomorrow
  );
  const [temperatureAfterTomorrow, setTemperatureAfterTomorrow] = useState(
    weatherData.temperatureAfterTomorrow
  );
  useEffect(() => {
    setTemperatureTomorrow(weatherData.temperatureTomorrow);
    setTemperatureAfterTomorrow(weatherData.temperatureAfterTomorrow);
  }, [weatherData]);
  //Celsius to F
  useEffect(() => {
    //Tomorrow
    if (ctxFahrenheit) {
      const fTemp = Number(
        ((weatherData.temperatureTomorrow * 9) / 5 + 32).toFixed(2)
      );
      setTemperatureTomorrow(fTemp);
    } else {
      setTemperatureTomorrow(weatherData.temperatureTomorrow);
    }
    //After Tomorrow
    if (ctxFahrenheit) {
      const fTemp = Number(
        ((weatherData.temperatureAfterTomorrow * 9) / 5 + 32).toFixed(2)
      );
      setTemperatureAfterTomorrow(fTemp);
    } else {
      setTemperatureAfterTomorrow(weatherData.temperatureAfterTomorrow);
    }
  }, [ctxFahrenheit, weatherData]);

  return (
    <>
      <div
        className={`${styles.weatherTomorrow} ${
          weatherData.temperatureTomorrow < 15
            ? styles.weatherTomorrowBkgBlue
            : weatherData.temperatureTomorrow > 35
            ? styles.weatherTomorrowBkgRed
            : styles.weatherTomorrowBkgYellow
        }`}
      >
        <div className={styles.weatherTomorrowImg} />
        <div className={styles.weatherTomorrowData}>
          <p>TOMORROW</p>
          <p>
            {temperatureTomorrow}°{ctxFahrenheit ? "F" : "C"}
          </p>
        </div>
      </div>
      <div
        className={`${styles.weatherTomorrow} ${styles.weatherAfterTomorrow} ${
          weatherData.temperatureAfterTomorrow < 15
            ? styles.weatherAfterTomorrowBkgBlue
            : weatherData.temperatureAfterTomorrow > 35
            ? styles.weatherAfterTomorrowBkgRed
            : styles.weatherAfterTomorrowBkgYellow
        }`}
      >
        <div className={styles.weatherTomorrowImg} />
        <div className={styles.weatherTomorrowData}>
          <p>AFTER TOMORROW</p>
          <p>
            {temperatureAfterTomorrow}°{ctxFahrenheit ? "F" : "C"}
          </p>
        </div>
      </div>
    </>
  );
};
