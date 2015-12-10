var React = require('react'),
    KeyStore = require('../stores/KeyStore'),
    Key = require('./key'),
    Tones = require('../constants/Tones'),
    Recorder = require('./recorder'),
    Jukebox = require('./jukebox');

var Organ = React.createClass({
  render: function() {
    var keys = Object.keys(Tones).map(function(tone, idx){
      return <Key key={idx} noteName={tone}/>;
    });
    return(
      <div>
        {keys}
        <Recorder/>
        <br/>
        <Jukebox/>
      </div>
    );
  }
});

module.exports = Organ;
