import React from "react";
import PropTypes from "prop-types";

const ForecastSummary = (props) => {
    const {
        date,
        description,
        icon,
        temperature
    } = props;

    return <div class="forecast-summary" data-testid="forecast-summary">
        <div className="forecast-summary__date">
        {date}
      </div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        {icon}
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-summary__description">
        {description}
      </div>
    </div>;
};

export default ForecastSummary;

ForecastSummary.prototype = {
    date: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
    }).isRequired,
};