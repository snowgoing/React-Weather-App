var React = require('react');
var {Component} = React;
var {Link, IndexLink} = require('react-router');

class Nav extends Component {
  onSearch(e) {
    e.preventDefault();

    var loc = e.target.location.value;
    var encodedLocation = encodeURIComponent(loc);

    if(loc.length > 0) {
      e.target.location.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  }
  render() {
    return (
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
            <li className='menu-text'>React Weather App</li>
            <li><IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
            <li><Link to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link></li>
            <li><Link to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
          </ul>
        </div>
        <div className='top-bar-right'>
          <form onSubmit={this.onSearch.bind(this)}>
            <ul className='menu'>
              <li><input type='search' name='location' placeholder='Search weather by city' /></li>
              <li>
                <input type='submit' className='button' value='Get Weather' />
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
}

module.exports = Nav;
