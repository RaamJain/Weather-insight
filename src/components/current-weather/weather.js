import "./weather.css"

const Weather = ({data}) =>{
    const max_temp = Math.ceil(data.main.temp_max);
    const min_temp = Math.floor(data.main.temp_min);

    return(
        <div className = "weather">
            <div className="top"> 
                <div>
                    <p className="city">{data.city}</p>
                    <p className="climate">{data.weather[0].description}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`}></img>
            </div>

            <div className="bottom">
                <p className="temp">{Math.round(data.main.temp)}&deg;<sup>c</sup></p>
                <div className="Details">
                    <div className="param-row">
                        <span className="param-label">Feels Like</span>
                        <span className="param-value">{Math.round(data.main.feels_like)}&deg;<sup>c</sup></span>
                    </div>
                    <div className="param-row">
                        <span className="param-label">Humidity</span>
                        <span className="param-value">{Math.round(data.main.humidity)}%</span>
                    </div>
                    <div className="param-row">
                        <span className="param-label">Wind</span>
                        <span className="param-value">{Math.round(data.wind.speed)}</span>
                    </div>
                    <div className="param-row">
                        <span className="param-label">DT</span>
                        <span className="param-value">{data.dt}</span>
                    </div>
                </div>
            </div>
            
        </div>

    )
}
export default Weather;