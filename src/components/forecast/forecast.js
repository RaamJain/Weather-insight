import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import "./forecast.css";

const week_day = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

const Forecast = ({data}) => {
    const day = new Date().getDay()
    const forecastDays = week_day.slice(day, week_day.length).concat(week_day.slice(0, day));

    return (    
    <>
        <label className="title">Daily</label>
        <Accordion allowZeroExpanded>
            {data.list.slice(0, 7).map((item, index) => (
            <AccordionItem key={index}>
                <AccordionItemHeading>
                    <AccordionItemButton className="button">
                        <div className="daily-item">
                            <img alt="Weather" src={`icons/${item.weather[0].icon}.png`} className="item-icon"></img>
                            <label className="day">{forecastDays[index]}</label>
                            <label className="desc">{item.weather[0].description}</label>
                            <label className="min-max">{Math.round(item.main.temp_min)}&deg;<sup>c</sup> / {Math.round(item.main.temp_max)}&deg;<sup>c</sup></label>
                            {/* <label className="desc">{item.weather[0].description}</label> */}
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="daily-panel">
                        <div className="panel-item">
                            <label>feels_like: </label>
                            <label>{Math.round(item.main.feels_like)}&deg;<sup>c</sup></label>
                        </div>
                        <div className="panel-item">
                            <label>Pressure: </label>
                            <label>{item.main.pressure}hPa</label>
                        </div>
                        <div className="panel-item">
                            <label>Humidity: </label>
                            <label>{item.main.humidity}%</label>
                        </div>
                        <div className="panel-item">
                            <label>Wind Speed: </label>
                            <label>{Math.ceil(item.wind.speed)} m/s</label>
                        </div>
                        <div className="panel-item">
                            <label>Sea Level: </label>
                            <label>{item.main.sea_level}m</label>
                        </div>
                        <div className="panel-item">
                            <label>Clouds coverage: </label>
                            <label>{item.clouds.all}%</label>
                        </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            ))}
            <AccordionItem></AccordionItem>
        </Accordion>
    </>
    )
}

export default Forecast;