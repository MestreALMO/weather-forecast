import { useCtxLocation } from "@/context/ctxLocation";
import styles from "./todaysWeather.module.css";

export const TodaysWeather = () => {
  //city, state
  const { ctxLocation } = useCtxLocation();

  return (
    <>
      <div className={styles.todaysWeather}>
        <p>weather</p>
        <p>{ctxLocation.city}</p>
      </div>
    </>
  );
};
