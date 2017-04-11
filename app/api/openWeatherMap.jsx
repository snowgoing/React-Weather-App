var axios = require('axios');

// api key ccf734dccbaa06f3da2723e646d0e480
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=ccf734dccbaa06f3da2723e646d0e480';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestURL).then(function(res){
      debugger;
      if (res.status === 200) {
        return res.data.main.temp;
      } else {
        throw new Error(res);
      }
    }, function(res){
      throw new Error(res);
    });
  }
}
