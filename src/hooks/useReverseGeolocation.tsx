// hooks/useReverseGeolocation.ts
import { useState, useEffect } from "react";
import axios from "axios";

interface LocationData {
  city: string;
  state: string;
}

const useReverseGeolocation = (latitude: number, longitude: number) => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const apiKey = process.env.NEXT_PUBLIC_OPENCAGE_API_KEY; // Defina a chave da API no .env.local

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get(
          `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
        );
        const components = response.data.results[0].components;
        setLocation({
          city: components.city || components.town || components.village,
          state: components.state,
        });
      } catch (error) {
        setError("Failed to fetch location data");
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, [latitude, longitude, apiKey]);

  return { location, error, loading };
};

export default useReverseGeolocation;
