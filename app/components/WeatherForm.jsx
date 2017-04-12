var React = require('react');
var {Component} = React;

class WeatherForm extends Component {
  onFormSubmit(e) {
    e.preventDefault();

    var location = e.target.location.value;

    if(location.length > 0) {
      this.props.onSearch(location);
      e.target.location.value = '';
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <div>
            <input type='text' name='location' placeholder='Enter city name'/>
          </div>
          <div>
            <button className='button expanded hollow'>Get Weather</button>
          </div>
        </form>
      </div>
    )
  }
}

module.exports = WeatherForm;
