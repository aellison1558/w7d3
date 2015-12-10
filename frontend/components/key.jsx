var React = require('react'),
    KeyStore = require('../stores/KeyStore'),
    Note = require('../util/Note'),
    Tones = require('../constants/Tones');

var Key = React.createClass({
  playNote: function(){
    if (KeyStore.all().indexOf(this.props.noteName) > -1) {
      this.note.start();
      this.refs.pressed.classList.add("pressed");
    } else {
      this.note.stop();
      this.refs.pressed.classList.remove("pressed");
    }
  },
  componentDidMount: function() {
    this.note = new Note(Tones[this.props.noteName]);
    KeyStore.addListener(this.playNote);
  },
  componentWillUnmount: function() {
    KeyStore.removeListener(this.playNote);
  },
  render: function(){
    return (
      <div className="key" ref="pressed">{this.props.noteName}</div>
    );
  }
});

module.exports = Key;
