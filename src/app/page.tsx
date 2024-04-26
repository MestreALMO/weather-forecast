"use client";

import Image from "next/image";
import styles from "./page.module.css";
import IconCompass from "@/icons/iconCompass.svg";
import { ImgBackground } from "@/components/imgBackground";

export default function Home() {
  return (
    <main className={styles.main}>
      <ImgBackground />
      <div className={styles.divInput}>
        <Image
          className={styles.divInputIcon}
          alt="Compass icon"
          src={IconCompass}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto"
          }} />
        <input
          className={styles.divInputMain}
          placeholder="City, State/Province"
        />
      </div>
    </main>
  );
}
