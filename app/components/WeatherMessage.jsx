var React = require('react');

var WeatherMessage = ({temp, location}) => {
  var capitalizeFirstLetter = location.charAt(0).toUpperCase() + location.slice(1);
  return (
    <h3 className='text-center'>It's {temp} in {capitalizeFirstLetter}</h3>
  )
}

module.exports = WeatherMessage;
