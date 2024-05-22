"use client";

import { MainInput } from "@/components/mainInput";
import styles from "./page.module.css";
import { ImgBackground } from "@/components/imgBackground";

export default function Home() {
  return (
    <main className={styles.main}>
      <ImgBackground />
      <MainInput />
    </main>
  );
}
