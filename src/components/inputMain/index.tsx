import styles from "./inputMain.module.css";
import Image from "next/image";
import IconCompass from "@/icons/iconCompass.svg";
import { useCtxLocation } from "@/context/ctxLocation";
import { ChangeEvent, useEffect, useState } from "react";

export const InputMain = () => {
  //city, state
  const { ctxLocation, setCtxLocation } = useCtxLocation();

  //input initial state
  const [inputvalue, setInputValue] = useState(``);
  useEffect(() => {
    if (ctxLocation) {
      `${ctxLocation.city}, ${ctxLocation.state}` !== ", "
        ? setInputValue(`${ctxLocation.city}, ${ctxLocation.state}`)
        : setInputValue("");
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
