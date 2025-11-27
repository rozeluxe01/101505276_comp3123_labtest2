function WeatherCard({ data }) {
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{data.name}, {data.sys.country}</h2>
      <div className="weather-main">
        <img src={iconUrl} alt={data.weather[0].description} />
        <div>
          <p className="temp">{Math.round(data.main.temp)}°C</p>
          <p className="desc">{data.weather[0].description}</p>
        </div>
      </div>
      <div className="details">
        <p>Feels like: {Math.round(data.main.feels_like)}°C</p>
        <p>Humidity: {data.main.humidity}%</p>
        <p>Min: {Math.round(data.main.temp_min)}°C</p>
        <p>Max: {Math.round(data.main.temp_max)}°C</p>
      </div>
    </div>
  );
}
