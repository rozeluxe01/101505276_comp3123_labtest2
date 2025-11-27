// src/components/WeatherCard.jsx
import "./WeatherCard.css";
import SearchBar from "./SearchBar";

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

function WeatherCard({ data, onSearch }) {
  if (!data) return null;

  const now = new Date();
  const dayName = dayNames[now.getDay()];
  const dayNumber = now.getDate();
  const monthName = monthNames[now.getMonth()];

  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

  const temp = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const minTemp = Math.round(data.main.temp_min);
  const maxTemp = Math.round(data.main.temp_max);
  const humidity = data.main.humidity;
  const pressure = data.main.pressure;
  const windSpeed = data.wind?.speed;

  return (
    <div className="weather-wrapper">
      <div className="weather-main-card">
        {/* SEARCH BAR INSIDE CARD */}
        <div className="weather-search">
          <SearchBar onSearch={onSearch} />
        </div>

        {/* MAIN CONTENT (LEFT + RIGHT) */}
        <div className="weather-content">
          {/* LEFT PANEL */}
          <div className="weather-left">
            <p className="weather-day">{dayName}</p>
            <p className="weather-date">
              {monthName} {dayNumber}
            </p>
            <p className="weather-location">📍 {data.name}, {data.sys.country}</p>

            <div className="weather-left-bottom">
              <div className="temp-row">
                <img
                  className="weather-small-icon"
                  src={iconUrl}
                  alt={data.weather[0].description}
                />
                <p className="weather-temp-big">{temp}°C</p>
              </div>
              <p className="weather-condition">{data.weather[0].description}</p>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="weather-right">
            <div className="weather-right-top">

              <div className="weather-stats">
                <div className="stat-row"><span className="stat-label">HUMIDITY</span><span className="stat-value">{humidity}%</span></div>
                <div className="stat-row"><span className="stat-label">WIND</span><span className="stat-value">{windSpeed} m/s</span></div>
                <div className="stat-row"><span className="stat-label">AIR PRESSURE</span><span className="stat-value">{pressure} hPa</span></div>
                <div className="stat-row"><span className="stat-label">MAX TEMP</span><span className="stat-value">{maxTemp}°C</span></div>
                <div className="stat-row"><span className="stat-label">MIN TEMP</span><span className="stat-value">{minTemp}°C</span></div>
                <div className="stat-row"><span className="stat-label">FEELS LIKE</span><span className="stat-value">{feelsLike}°C</span></div>
              </div>
            </div>

            {/* bottom bar */}
            <div className="weather-forecast-bar">
              <div className="forecast-item">
                <span className="forecast-day">Today</span>
                
                <div className="forecast-temp-row">
                  <img className="forecast-icon" src={iconUrl} alt="weather icon" />
                  <span className="forecast-temp">{temp}°</span>
                </div>
              </div>


              <div className="forecast-item">
                <span className="forecast-day">Feels</span>
                
                <div className="forecast-temp-row">
                  <img className="forecast-icon" src={iconUrl} alt="weather icon"/>
                  <span className="forecast-temp">{feelsLike}°</span>
                </div>
              </div>


              <div className="forecast-item">
                <span className="forecast-day">Max</span>
                
                <div className="forecast-temp-row">
                  <img className="forecast-icon" src={iconUrl} alt="weather icon" />
                  <span className="forecast-temp">{maxTemp}°</span>
                </div>
              </div>

              <div className="forecast-item">
                <span className="forecast-day">Min</span>
                
                <div className="forecast-temp-row">
                  <img className="forecast-icon" src={iconUrl} alt="weather icon"/>
                  <span className="forecast-temp">{minTemp}°</span>
                </div>
              </div>

            </div>


          </div>
        </div>

      </div>
    </div>
  );
}

export default WeatherCard;
