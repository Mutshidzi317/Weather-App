import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://openweathermap.org/api/one-call-3';

export const getWeatherByCity = async (city: string) => {
  const res = await axios.get(BASE_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
    },
  });
  return res.data;
};

export const getWeatherByCoords = async (lat: number, lon: number) => {
  const res = await axios.get(BASE_URL, {
    params: {
      lat,
      lon,
      appid: API_KEY,
      units: 'metric',
    },
  });
  return res.data;
};
