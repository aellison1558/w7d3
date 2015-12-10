var React = require('react'),
    ReactDOM = require('react-dom'),
    KeyListener = require('./util/KeyListener'),
    Organ = require('./components/organ');

var Test = React.createClass({
  render: function(){
    return(
      <div>hello from entry point</div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function() {
  KeyListener();
  ReactDOM.render(
    <Organ/>,
    document.getElementById("content")
  );}
);
