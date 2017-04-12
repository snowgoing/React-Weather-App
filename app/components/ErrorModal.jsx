var React = require('react');
var {Component} = React;
var PropTypes = require('prop-types');

class ErrorModal extends Component {
  componentDidMount() {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }
  render() {
    var {title, message} = this.props;
    return (
      <div id='error-modal' className='reveal tiny text-center' data-reveal=''>
        <h4>{title}</h4>
        <p>{message}</p>
        <p><button className='button hollow' data-close=''>OK</button></p>
      </div>
    )
  }
}

ErrorModal.defaultProps = {
  title: 'Error'
};

ErrorModal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired
};

module.exports = ErrorModal;
