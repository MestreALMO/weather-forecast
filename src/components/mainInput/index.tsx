import styles from "./mainInput.module.css";
import Image from "next/image";
import IconCompass from "@/icons/iconCompass.svg";
import { useEffect } from "react";
import { useCtxRegion } from "@/context/ctxRegion";

export const MainInput = () => {
  const Region = useCtxRegion();
  console.log(Region);

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
        />
      </div>
    </>
  );
};
