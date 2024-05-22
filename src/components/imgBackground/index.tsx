import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import styles from "./imgBackground.module.css";
import Image from "next/image";
import backgroundSmall from "@/imgs/background-small.png";

export const ImgBackground = () => {
  const [bgData, setBgData] = useState<{
    imageUrl: string;
    imageTitle: string;
  } | null>(null);

  useEffect(() => {
    async function api() {
      const response = await axios.get("/api/imgBackground");
      setBgData(response.data);
    }

    api();
  }, []);

  return (
    <>
      <div className={`${styles.backgroundImage}`}>
        {bgData ? (
          <Image
            src={bgData.imageUrl}
            alt={bgData.imageTitle}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        ) : (
          <Image
            src={backgroundSmall}
            alt="Loading image"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        )}
      </div>
    </>
  );
};
