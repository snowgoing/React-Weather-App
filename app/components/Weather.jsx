var React = require('react');
var {Component} = React;
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false
    }
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(location) {
    // Without the arrow function in OpenWeatherMap call
    // we would need var that = this; for that.setState

    this.setState({isLoading: true});

    OpenWeatherMap.getTemp(location).then((temp) => {
      this.setState({
        temp: temp,
        loc: location,
        isLoading: false
      });
    }, (e) => {
      alert(e);
      this.setState({
        temp: '',
        loc: '',
        isLoading: false
      });
    });
  }
  render() {
    var {isLoading, loc, temp} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && loc) {
        return <WeatherMessage temp={temp} location={loc}/>
      }
    };
    return (
      <div>
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>

    )
  }
}

module.exports = Weather;
