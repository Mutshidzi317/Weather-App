//import React from 'react';

interface Props {
  data: any;
  location: string;
}

const WeatherCard = ({ data, location }: Props) => {
  const { main, weather, wind } = data;

  return (
    <div className="p-6 rounded-lg shadow bg-white dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-2">{location}</h2>
      <p className="text-lg">{weather[0].description}</p>
      <p>🌡️ Temp: {main.temp}°C</p>
      <p>💧 Humidity: {main.humidity}%</p>
      <p>🌬️ Wind: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
