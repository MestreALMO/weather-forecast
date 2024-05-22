"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface Region {
  city: string;
  state: string;
}

interface ctxRegionContextProps {
  ctxRegion: Region;
  setCtxRegion: Dispatch<SetStateAction<Region>>;
}

const CtxRegionContext = createContext<ctxRegionContextProps>(
  {} as ctxRegionContextProps
);

export default function CtxRegionProvider({
  children,
}: {
  children: ReactNode;
}) {
  //Getting coordinates from browser
  const [latitude, useLatitude] = useState(0);
  const [longitude, useLongitude] = useState(0);
  useEffect(() => {
    function Coordinates() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          useLatitude(position.coords.latitude);
          useLongitude(position.coords.longitude);
        },
        (error) => {
          // display an error if we cant get coordinates
          console.error("Error getting user location:", error);
        }
      );
    }
    Coordinates();
  }, []);

  //Transforming coordinates to city and state
  const city = "Londres";
  const state = "Pallet";

  const [ctxRegion, setCtxRegion] = useState({ city, state });

  return (
    <CtxRegionContext.Provider value={{ ctxRegion, setCtxRegion }}>
      {children}
    </CtxRegionContext.Provider>
  );
}

export const useCtxRegion = () => {
  const context = useContext(CtxRegionContext);
  const { ctxRegion, setCtxRegion } = context;
  return { ctxRegion, setCtxRegion };
};
