import { useEffect, useState } from "react";
import styles from "./weatherTomorrow.module.css";
import axios from "axios";
import { useCtxLocation } from "@/context/ctxLocation";

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
          <p>{weatherData?.temperatureTomorrow}°C</p>
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
          <p>TOMORROW</p>
          <p>{weatherData?.temperatureTomorrow}°C</p>
        </div>
      </div>
    </>
  );
};
