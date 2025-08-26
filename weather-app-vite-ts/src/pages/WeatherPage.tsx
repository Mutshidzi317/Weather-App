import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import { getWeatherByCity, getWeatherByCoords } from '../services/weatherService';

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [location, setLocation] = useState<string>('Current Location');

  const fetchWeather = async (city?: string) => {
    try {
      const data = city
        ? await getWeatherByCity(city)
        : await getUserLocationWeather();
      setWeatherData(data);
    } catch (error) {

        const data = city
        ? await getWeatherByCity(city)
        : await getUserLocationWeather();
      setWeatherData(data);
      //alert('Could not fetch weather data.');
    }
  };

  const getUserLocationWeather = async () => {
    return new Promise(async (resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        async position => {
          const data = await getWeatherByCoords(position.coords.latitude, position.coords.longitude);
          resolve(data);
        },
        error => reject(error)
      );
    });
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const handleSearch = (city: string) => {
    setLocation(city);
    fetchWeather(city);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {weatherData && <WeatherCard data={weatherData} location={location} />}
    </div>
  );
};

export default WeatherPage;
