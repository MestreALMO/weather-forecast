import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./imgBackground.module.css";
import Image from "next/image";

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
      {bgData ? (
        <>
          <div className={`${styles.backgroundImage}`}>
            <Image
              src={bgData.imageUrl}
              alt={bgData.imageTitle}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
            <p>{bgData.imageTitle}</p>
          </div>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </>
  );
};
