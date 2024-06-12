import styles from "./inputMain.module.css";
import Image from "next/image";
import IconCompass from "@/icons/iconCompass.svg";
import { useCtxLocation } from "@/context/ctxLocation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

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

  function HandleInputSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const [city, state] = inputvalue.split(", ");
    setCtxLocation({ city: city, state: state });
  }

  return (
    <>
      <form className={styles.mainInput} onSubmit={HandleInputSubmit}>
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
      </form>
    </>
  );
};
