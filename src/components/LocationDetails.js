import React from 'react';
import PropTypes from 'prop-types';



function LocationDetails(props) {
    const {city, country} = props;
    return <h1>{`${city}, ${counrty}`}</h1>;

};

export default LocationDetails;

LocationDetails.PropTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
};