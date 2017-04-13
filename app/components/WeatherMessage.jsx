var React = require('react');

var WeatherMessage = ({temp, location, country}) => {
  var capitalizeFirstLetter = location.charAt(0).toUpperCase() + location.slice(1);
  return (
    <h3 className='text-center'>It's {temp} in {capitalizeFirstLetter}, {country}.</h3>
  )
}

module.exports = WeatherMessage;
