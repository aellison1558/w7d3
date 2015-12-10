var React = require('react'),
    TrackStore = require('../stores/TrackStore'),
    RecorderActions = require('../actions/recorder_actions'),
    TrackPlayer = require('./track_player'),
    TrackApiUtil = require('../util/TrackApiUtil');

var Jukebox = React.createClass({

  getInitialState: function(){
    return ({tracks: TrackStore.all()});
  },

  updateTracks: function(){
    this.setState({tracks: TrackStore.all()});
  },

  componentDidMount: function(){
    TrackStore.addListener(this.updateTracks);
    TrackApiUtil.fetch();
    //ask db for tracks with fetch
  },

  render: function(){
    var mappedTracks = this.state.tracks.map(function(track, idx){
      return(
        <TrackPlayer track={track} key={idx} />
      );
    });
    return (
      <div className="jukebox">
        <h1>Jukebox</h1>
        {mappedTracks}
      </div>
    );
  }

});

module.exports = Jukebox;
