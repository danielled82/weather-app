import React from "react";
import PropTypes from "prop-types";

function ForecastDetails(props) {
  const { humidity, direction, windspeed, temperature, date } = props;
  const formattedDate = new Date(date).toDateString();
  return (
    <div className="forecast-details">
      <div className="forecast-details-date"> {formattedDate} </div>
      <div className="forecast-details-humidity"> {humidity} </div>
      <div className="forecast-details-windspeed"> {windspeed} </div>
      <div className="forecast-details-temperature">
        {" "}
        {temperature.max}&deg;C{" "}
      </div>
      <div className="forecast-detals-direction"> {direction} </div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  date: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
  windspeed: PropTypes.number.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};
