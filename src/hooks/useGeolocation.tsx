import { useState, useEffect } from "react";

interface Coordinates {
  latitude: number | null;
  longitude: number | null;
}

interface GeolocationPositionError {
  code: number;
  message: string;
}

export const useGeolocation = () => {
  const [coordinates, setCoordinates] = useState<Coordinates>({
    latitude: null,
    longitude: null,
  });
  const [errorGeolocation, setErrorGeolocation] =
    useState<GeolocationPositionError | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setErrorGeolocation({
        code: 0,
        message: "Geolocation is not supported by your browser",
      });
      return;
    }

    const success = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      setCoordinates({ latitude, longitude });
    };

    const handleError = (error: GeolocationPositionError) => {
      setErrorGeolocation(error);
    };

    const geoOptions = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    };

    const watcher = navigator.geolocation.watchPosition(
      success,
      handleError,
      geoOptions
    );

    // Cleanup function to remove the watcher when the component is unmounted
    return () => navigator.geolocation.clearWatch(watcher);
  }, []);

  return { coordinates, errorGeolocation };
};
