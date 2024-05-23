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

interface Location {
  city: string;
  state: string;
}

interface ctxLocationContextProps {
  ctxLocation: Location;
  setCtxLocation: Dispatch<SetStateAction<Location>>;
}

const CtxLocationContext = createContext<ctxLocationContextProps>(
  {} as ctxLocationContextProps
);

export default function CtxLocationProvider({
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

  const [ctxLocation, setCtxLocation] = useState({ city, state });

  return (
    <CtxLocationContext.Provider value={{ ctxLocation, setCtxLocation }}>
      {children}
    </CtxLocationContext.Provider>
  );
}

export const useCtxLocation = () => {
  const context = useContext(CtxLocationContext);
  const { ctxLocation, setCtxLocation } = context;
  return { ctxLocation, setCtxLocation };
};
