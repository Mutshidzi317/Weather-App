// import React from 'react';
import WeatherPage from './pages/WeatherPage';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat transition-all"
      style={{
        backgroundImage: 'url("https://tse1.mm.bing.net/th/id/OIP.VfBqMR3unFiW5HQmd9wJGAHaEK?pid=Api&P=0&h=220")', // or use remote URL
      }}
    >
      {/* Overlay for blur + brightness */}
      <div className="min-h-screen backdrop-blur-sm backdrop-brightness-90 dark:backdrop-brightness-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-white drop-shadow"
            style={{ color: 'white' }}
            >My Weather App</h1>
            <ThemeToggle />
          </div>
          <h2 className="text-xl text-white/80 italic tracking-wide mb-6 text-center px-4"
          style={{ color: 'white' }}
          >
          Check the weather in your city
        </h2>
          <WeatherPage />
        </div>
      </div>
    </div>
  );
};

export default App;
