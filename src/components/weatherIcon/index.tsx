import styles from "./weatherIcon.module.css";
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

const IconSize = 130;

export const WeatherIcon = ({ weatherDescription }: IconTodaysWeatherProps) => {
  //Returns the icon acoording with weatherDescription
  switch (weatherDescription) {
    case "Clouds":
      return (
        <div className={styles.weatherIconWeather}>
          {}
          <Image src={Clouds} alt={weatherDescription} width={IconSize} />
        </div>
      );
      break;
    case "Drizzle":
      return (
        <div className={styles.weatherIconWeather}>
          {}
          <Image src={Drizzle} alt={weatherDescription} width={IconSize} />
        </div>
      );
      break;
    case "Dust":
      return (
        <div className={styles.weatherIconWeather}>
          {}
          <Image src={DustSandAsh} alt={weatherDescription} width={IconSize} />
        </div>
      );
      break;
    case "Sand":
      return (
        <div className={styles.weatherIconWeather}>
          {}
          <Image src={DustSandAsh} alt={weatherDescription} width={IconSize} />
        </div>
      );
      break;
    case "Ash":
      return (
        <div className={styles.weatherIconWeather}>
          {}
          <Image src={DustSandAsh} alt={weatherDescription} width={IconSize} />
        </div>
      );
      break;
    case "Mist":
      return (
        <div className={styles.weatherIconWeather}>
          {}
          <Image src={MistHazeFog} alt={weatherDescription} width={IconSize} />
        </div>
      );
      break;
    case "Haze":
      return (
        <div className={styles.weatherIconWeather}>
          {}
          <Image src={MistHazeFog} alt={weatherDescription} width={IconSize} />
        </div>
      );
      break;
    case "Fog":
      return (
        <div className={styles.weatherIconWeather}>
          {}
          <Image src={MistHazeFog} alt={weatherDescription} width={IconSize} />
        </div>
      );
      break;
    case "Rain":
      return (
        <div className={styles.weatherIconWeather}>
          {}
          <Image src={Rain} alt={weatherDescription} width={IconSize} />
        </div>
      );
      break;
    case "Smoke":
      return (
        <div className={styles.weatherIconWeather}>
          {}
          <Image src={Smoke} alt={weatherDescription} width={IconSize} />
        </div>
      );
      break;
    case "Snow":
      return (
        <div className={styles.weatherIconWeather}>
          {}
          <Image src={Snow} alt={weatherDescription} width={IconSize} />
        </div>
      );
      break;
    case "Thunderstorm":
      return (
        <div className={styles.weatherIconWeather}>
          {}
          <Image
            src={ThunderstormSquall}
            alt={weatherDescription}
            width={IconSize}
          />
        </div>
      );
      break;
    case "Squall":
      return (
        <div className={styles.weatherIconWeather}>
          {}
          <Image
            src={ThunderstormSquall}
            alt={weatherDescription}
            width={IconSize}
          />
        </div>
      );
      break;
    case "Tornado":
      return (
        <div className={styles.weatherIconWeather}>
          {}
          <Image src={Tornado} alt={weatherDescription} width={IconSize} />
        </div>
      );
      break;
    default: //Clear or others
      return (
        <div className={styles.weatherIconWeather}>
          {}
          <Image src={Clear} alt={weatherDescription} width={IconSize} />
        </div>
      );
  }
};
