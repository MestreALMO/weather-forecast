import { useEffect, useState } from "react";
import styles from "./weatherTomorrow.module.css";
import axios from "axios";
import { useCtxLocation } from "@/context/ctxLocation";

export const WeatherTomorrow = () => {
  //city, state
  const { ctxLocation } = useCtxLocation();
  const [weatherData, setWeatherData] = useState();

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

    console.log(weatherData);
  }, [ctxLocation]);

  return (
    <>
      <div
        className={`${styles.weatherTomorrow} ${styles.weatherTomorrowBkgYellow}`}
      >
        <p>Tomorrow</p>
      </div>
    </>
  );
};
