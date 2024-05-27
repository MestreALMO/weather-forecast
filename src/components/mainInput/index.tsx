import styles from "./mainInput.module.css";
import Image from "next/image";
import IconCompass from "@/icons/iconCompass.svg";
import { useCtxLocation } from "@/context/ctxLocation";
import { ChangeEvent, useEffect, useState } from "react";

export const MainInput = () => {
  //city, state
  const { ctxLocation, setCtxLocation } = useCtxLocation();

  //input initial state
  const [inputvalue, setInputValue] = useState(``);
  useEffect(() => {
    if (ctxLocation) {
      setInputValue(`${ctxLocation.city}, ${ctxLocation.state}`);

      inputvalue === ", " || setInputValue("");
    }
  }, [ctxLocation]);

  function HandleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <>
      <div className={styles.mainInput}>
        <Image
          className={styles.mainInputIcon}
          alt="Compass icon"
          src={IconCompass}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <input
          className={styles.mainInputInput}
          placeholder="City, State/Province"
          value={inputvalue}
          onChange={HandleInputChange}
        />
      </div>
    </>
  );
};
