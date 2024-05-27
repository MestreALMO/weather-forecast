"use client";

import { MainInput } from "@/components/mainInput";
import styles from "./page.module.css";
import { ImgBackground } from "@/components/imgBackground";
import { TodaysWeather } from "@/components/todaysWeather";

export default function Home() {
  return (
    <main className={styles.mainPage}>
      <ImgBackground />
      <div className={styles.mainPageData}>
        <MainInput />
        <TodaysWeather />
      </div>
    </main>
  );
}
