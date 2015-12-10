var React = require('react'),
    TrackStore = require('../stores/TrackStore'),
    RecorderActions = require('../actions/recorder_actions'),
    TrackApiUtil = require('../util/TrackApiUtil');


var TrackPlayer = React.createClass({

  play: function(){
    this.props.track.play();
  },
  delete: function(){
    TrackApiUtil.destroy(this.props.track);
  },
  render: function(){
    return (
      <div className="track_player">
        <h3>{this.props.track.name}</h3>
        <button onClick={this.play}>Play</button>
        <button onClick={this.delete}>Delete</button>
      </div>
    );
  }

});

module.exports = TrackPlayer;
