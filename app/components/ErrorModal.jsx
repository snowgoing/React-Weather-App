var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var {Component} = React;
var PropTypes = require('prop-types');

class ErrorModal extends Component {
  componentDidMount() {
    var {title, message} = this.props;
    var modalMarkup = (
      <div id='error-modal' className='reveal tiny text-center' data-reveal=''>
        <h4>{title}</h4>
        <p>{message}</p>
        <p><button className='button hollow' data-close=''>OK</button></p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }
  render() {
    return (
      <div></div>
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
