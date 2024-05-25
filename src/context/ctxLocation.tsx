"use client";

import { useGeolocation } from "@/hooks/useGeolocation";
import axios from "axios";
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
  //geolocation
  const { coordinates, errorGeolocation } = useGeolocation();
  const [ctxLocation, setCtxLocation] = useState({ city: "", state: "" });

  //Reverse Geolocation
  useEffect(() => {
    async function api() {
      const { data } = await axios.get("/api/reverseGeolocation", {
        params: {
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
        },
      });
      setCtxLocation({ city: data.city, state: data.state });
    }

    //In case latitude not null run the function
    if (coordinates.latitude) {
      api();
    }
  }, [coordinates]);

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
