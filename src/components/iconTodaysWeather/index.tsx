import styles from "./iconTodaysWeather.module.css";
import Image from "next/image";
import Clear from "@/imgs/weatherIcons/clear.svg";
import Clouds from "@/imgs/weatherIcons/clouds.svg";
import Drizzle from "@/imgs/weatherIcons/drizzle.svg";
import DustSandAsh from "@/imgs/weatherIcons/dustSandAsh.svg";
import MistHazeFog from "@/imgs/weatherIcons/mistHazeFog.svg";
import Rain from "@/imgs/weatherIcons/rain.svg";
import Smoke from "@/imgs/weatherIcons/smoke.svg";
import Snow from "@/imgs/weatherIcons/snow.svg";
import ThunderstormSquall from "@/imgs/weatherIcons/thunderstormSquall.svg";
import Tornado from "@/imgs/weatherIcons/tornado.svg";

interface IconTodaysWeatherProps {
  weatherDescription: string;
}

export const IconTodaysWeather = ({
  weatherDescription,
}: IconTodaysWeatherProps) => {
  //Returns the icon acoording with weatherDescription
  switch (weatherDescription) {
    case "Clouds":
      return (
        <div className={styles.iconTodaysWeather}>
          {}
          <Image src={Clouds} alt={weatherDescription} width={150} />
        </div>
      );
      break;
    case "Drizzle":
      return (
        <div className={styles.iconTodaysWeather}>
          {}
          <Image src={Drizzle} alt={weatherDescription} width={150} />
        </div>
      );
      break;
    case "Dust":
      return (
        <div className={styles.iconTodaysWeather}>
          {}
          <Image src={DustSandAsh} alt={weatherDescription} width={150} />
        </div>
      );
      break;
    case "Sand":
      return (
        <div className={styles.iconTodaysWeather}>
          {}
          <Image src={DustSandAsh} alt={weatherDescription} width={150} />
        </div>
      );
      break;
    case "Ash":
      return (
        <div className={styles.iconTodaysWeather}>
          {}
          <Image src={DustSandAsh} alt={weatherDescription} width={150} />
        </div>
      );
      break;
    case "Mist":
      return (
        <div className={styles.iconTodaysWeather}>
          {}
          <Image src={MistHazeFog} alt={weatherDescription} width={150} />
        </div>
      );
      break;
    case "Haze":
      return (
        <div className={styles.iconTodaysWeather}>
          {}
          <Image src={MistHazeFog} alt={weatherDescription} width={150} />
        </div>
      );
      break;
    case "Fog":
      return (
        <div className={styles.iconTodaysWeather}>
          {}
          <Image src={MistHazeFog} alt={weatherDescription} width={150} />
        </div>
      );
      break;
    case "Rain":
      return (
        <div className={styles.iconTodaysWeather}>
          {}
          <Image src={Rain} alt={weatherDescription} width={150} />
        </div>
      );
      break;
    case "Smoke":
      return (
        <div className={styles.iconTodaysWeather}>
          {}
          <Image src={Smoke} alt={weatherDescription} width={150} />
        </div>
      );
      break;
    case "Snow":
      return (
        <div className={styles.iconTodaysWeather}>
          {}
          <Image src={Snow} alt={weatherDescription} width={150} />
        </div>
      );
      break;
    case "Thunderstorm":
      return (
        <div className={styles.iconTodaysWeather}>
          {}
          <Image
            src={ThunderstormSquall}
            alt={weatherDescription}
            width={150}
          />
        </div>
      );
      break;
    case "Squall":
      return (
        <div className={styles.iconTodaysWeather}>
          {}
          <Image
            src={ThunderstormSquall}
            alt={weatherDescription}
            width={150}
          />
        </div>
      );
      break;
    case "Tornado":
      return (
        <div className={styles.iconTodaysWeather}>
          {}
          <Image src={Tornado} alt={weatherDescription} width={150} />
        </div>
      );
      break;
    default: //Clear or others
      return (
        <div className={styles.iconTodaysWeather}>
          {}
          <Image src={Clear} alt={weatherDescription} width={150} />
        </div>
      );
  }
};
