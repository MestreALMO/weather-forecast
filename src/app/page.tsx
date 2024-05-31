"use client";

import { InputMain } from "@/components/inputMain";
import styles from "./page.module.css";
import { ImgBackground } from "@/components/imgBackground";
import { WeatherToday } from "@/components/weatherToday";
import { WeatherTomorrow } from "@/components/weatherTomorrow";

export default function Home() {
  return (
    <main className={styles.mainPage}>
      <ImgBackground />
      <div className={styles.mainPageData}>
        <InputMain />
        <WeatherToday />
        <WeatherTomorrow />
      </div>
    </main>
  );
}
