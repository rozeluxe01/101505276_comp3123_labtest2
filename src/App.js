import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

const API_BASE = "https://api.openweathermap.org/data/2.5/weather";

function App() {
  const [city, setCity] = useState("Toronto");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError("");
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
      const res = await fetch(
        `${API_BASE}?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric`
      );
      if (!res.ok) {
        throw new Error("City not found");
      }
      const data = await res.json();
      setWeather(data);
      setCity(cityName);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []); // runs once on mount

  const handleSearch = (newCity) => {
    if (!newCity) return;
    fetchWeather(newCity);
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} defaultCity={city} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
