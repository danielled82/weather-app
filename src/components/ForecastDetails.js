import React from "react";
import PropTypes from "prop-types";

function ForecastDetails(props) {
    const { humidity, direction, windspeed, temperature, date} = props;
    const formattedDate = new Date{date}.toDatestring{};

    return(
        <div className="forecast-details">
        <div className="forecast-detals-date"> {formattedDate} </div>
        <div className="forecast-detals-humidity"> {humidity} </div>
        <div className="forecast-detals-windspeed"> {windspeed} </div>
        <div className="forecast-detals-temperature"> {temperature.max}&deg;C </div>
        <div className="forecast-detals-direction"> {direction} </div>
    </div>
    );
}

export default ForecastDetails;

ForecastDetails.PropTypes = {
    date: PropTypes.number.isRequired,
    humidity: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
    windspeed: PropTypes.string.isRequired,
    temperature: PropTypes.shape({
        min:PropTypes.number,
        max: PropTypes.number,
    }).isRequired,
};