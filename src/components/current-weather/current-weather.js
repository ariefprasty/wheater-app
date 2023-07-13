import "./weather-current.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <section className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-condition">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </section>
      <section className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)} °C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">
              {Math.round(data.wind.speed)} m/s
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">
              {Math.round(data.main.humidity)} %
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">
              {Math.round(data.main.pressure) / 1000} MPa
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurrentWeather;
