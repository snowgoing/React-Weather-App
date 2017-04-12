var React = require('react');
var {Component} = React;
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className='text-center'>Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li><Link to='/?location=Boston'>Boston, MA</Link></li>
        <li><Link to='/?location=Lisbon'>Lisbon, Portugal</Link></li>
        <li><Link to='/?location=Lisbon'>Wauchope, Australia</Link></li>
      </ol>
    </div>
  )
};

module.exports = Examples;
