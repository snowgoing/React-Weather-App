var React = require('react');
var {Component} = React;
var Nav = require('Nav');


// class Main extends Component {
//   render() {
//     return (
//       <div>
//         <Nav />
//         <h2>Main Component</h2>
//         {this.props.children}
//       </div>
//
//     )
//   }
// }

var Main = (props) => {
  return (
    <div>
      <Nav />
      <div className='row'>
        <div className='columns medium-6 large-4 small-centered'>
          {props.children}
        </div>
      </div>
    </div>
  )
};

module.exports = Main;
