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
    // var that = this;  ** Would be for that.setState without the arrow function

    this.setState({isLoading: true});

    OpenWeatherMap.getTemp(location).then((temp) => {
      this.setState({
        temp: temp,
        loc: location,
        isLoading: false
      });
    }, function(e) {
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
