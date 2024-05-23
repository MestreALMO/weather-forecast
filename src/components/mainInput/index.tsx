import styles from "./mainInput.module.css";
import Image from "next/image";
import IconCompass from "@/icons/iconCompass.svg";
import { useCtxLocation } from "@/context/ctxLocation";
import { useGetGeolocation } from "@/hooks/useGetGeolocation";

export const MainInput = () => {
  //geolocation
  const { coordinates, error } = useGetGeolocation();
  //city, state
  const { ctxLocation, setCtxLocation } = useCtxLocation();

  return (
    <>
      <div className={styles.divInput}>
        <Image
          className={styles.divInputIcon}
          alt="Compass icon"
          src={IconCompass}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <input
          className={styles.divInputMain}
          placeholder="City, State/Province"
          value={`${ctxLocation.city}, ${ctxLocation.state}`}
          onChange={() => {}}
        />
      </div>
    </>
  );
};
