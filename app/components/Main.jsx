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
      <h2>Main Component</h2>
      {props.children}
    </div>
  )
};

module.exports = Main;
