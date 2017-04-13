var React = require('react');
var {Component} = React;
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

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

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      temp: undefined,
      loc: undefined,
      country: undefined
    });

    OpenWeatherMap.getTemp(location).then((data) => {
      this.setState({
        temp: data.temp,
        loc: location,
        country: data.country,
        isLoading: false
      });
    }, (e) => {
      this.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  }
  componentDidMount() {
    var loc = this.props.location.query.location;

    if (loc && loc.length > 0) {
      this.handleSearch(loc);
      window.location.hash = '#/';
    }
  }
  componentWillReceiveProps(newProps) {
    var loc = newProps.location.query.location;

    if (loc && loc.length > 0) {
      this.handleSearch(loc);
      window.location.hash = '#/';
    }
  }
  render() {
    var {isLoading, loc, temp, country, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className='text-center'>Fetching weather...</h3>;
      } else if (temp && loc) {
        return <WeatherMessage temp={temp} location={loc} country={country}/>
      }
    };

    function renderError() {
      if(typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className='text-center page-title'>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
}

module.exports = Weather;
