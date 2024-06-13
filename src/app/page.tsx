"use client";

import { InputMain } from "@/components/inputMain";
import styles from "./page.module.css";
import { ImgBackground } from "@/components/imgBackground";
import { WeatherToday } from "@/components/weatherToday";
import { WeatherTomorrow } from "@/components/weatherTomorrow";
import { useCtxFahrenheit } from "@/context/ctxFahrenheit";
import { Tooltip } from "react-tooltip";

export default function Home() {
  const { ctxFahrenheit, setCtxFahrenheit } = useCtxFahrenheit();

  function HandleFahrenheit() {
    setCtxFahrenheit(!ctxFahrenheit);
  }

  return (
    <main className={styles.mainPage}>
      <ImgBackground />
      <div className={styles.mainPageData}>
        <InputMain />
        <div
          onClick={HandleFahrenheit}
          data-tooltip-id="fahrenheitCelsius"
          data-tooltip-content="Click to convert to Fahrenheit and back to Celsius"
        >
          <WeatherToday />
          <WeatherTomorrow />
          <Tooltip id="fahrenheitCelsius" />
        </div>
      </div>
    </main>
  );
}
