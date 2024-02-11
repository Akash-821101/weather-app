// eslint-disable-next-line react/prop-types
const WeatherCard = ({ current }) => {
    const {
      cloud,
      condition,
      humidity,
      last_updated,
      temp_c,
      temp_f,
      wind_kph
    } = current;
  
    const { text, icon } = condition;
  
    return (
      <div className="card">
        <div>
          <img src={icon} alt="icon" />
        </div>
        <div className="card-content">
          <div className="content-list">
            <div>Temperture</div>
            <div>
              {temp_c}°C / {temp_f}°F
            </div>
          </div>
          <div className="content-list">
            <div>Condition</div>
            <div>{text}</div>
          </div>
          <div className="content-list">
            <div>Wind Speed</div>
            <div>{wind_kph} km/h</div>
          </div>
          <div className="content-list">
            <div>Humidity</div>
            <div>{humidity}%</div>
          </div>
          <div className="content-list">
            <div>Cloud Coverage</div>
            <div>{cloud}%</div>
          </div>
          <div className="content-list">
            <div>Last Updated</div>
            <div>{last_updated}</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default WeatherCard;
  