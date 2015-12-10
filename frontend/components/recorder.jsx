var React = require('react'),
    KeyStore = require('../stores/KeyStore'),
    Key = require('./key'),
    Tones = require('../constants/Tones'),
    Track = require('../util/Track'),
    RecorderActions = require('../actions/recorder_actions'),
    TrackApiUtil = require('../util/TrackApiUtil');

var Recorder = React.createClass({
  getInitialState: function(){
    return {
      track: new Track({name: 'sample track', roll: []}),
      isRecording: false
    };
  },

  componentDidMount: function(){
    KeyStore.addListener(this.listen);
  },

  listen: function(){
    if (!this.state.isRecording) {return;}
    this.state.track.addNotes(KeyStore.all());
  },

  toggleRecording: function(){
    debugger;
    if (this.state.isRecording) {
      this.state.track.stopRecording();
    } else {
      this.state.track.startRecording();
    }
    this.setState({isRecording: !this.state.isRecording});
  },

  handlePlay: function(){
    this.state.track.play();
  },

  changeName: function(e){
    this.setState({track:
      new Track({name: e.target.value, roll: this.state.track.roll})});
  },

  saveTrack: function(e){
    e.preventDefault();

    var data = {
      name: this.state.track.name,
      roll: this.state.track.roll
    };

    TrackApiUtil.createTrack(data);

  },

  render: function(){
    var recordText = this.state.isRecording ? "Stop Recording" : "Start Recording";
    return(
      <div>
        <button onClick={this.toggleRecording}>{recordText}</button>
        <button onClick={this.handlePlay}>Play</button>
        <input type="text" onChange={this.changeName} value={this.state.track.name}/>
        <button onClick={this.saveTrack}>Save</button>
      </div>
    );
  }
});

module.exports = Recorder;
