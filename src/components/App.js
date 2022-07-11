import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";

import "../styles/App.css";

function App({ forecast, location }) {
  console.log(forecast);
  return <LocationDetails city={location.city} country={location.country} />;
}

export default App;

App.propTypes = {
  forecast: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};
