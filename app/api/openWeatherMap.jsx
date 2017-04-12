var axios = require('axios');

// api key ccf734dccbaa06f3da2723e646d0e480
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=ccf734dccbaa06f3da2723e646d0e480';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestURL).then(function(res){
      // console.log(res.data);
      if (res.status !== 200) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(err){
      // throw new Error(err.response.data.message) is how new -v of Axios works
      // we use static message instead
      throw new Error('City not found');
    });
  }
}
