var Dispatcher = require('../dispatcher/Dispatcher');

var RecorderActions = {
  saveTrack: function(track){
    Dispatcher.dispatch({
      actionType: 'ADD_TRACK',
      track: track

    });
  },

  deleteTrack: function(track){
    Dispatcher.dispatch({
      actionType: 'DELETE_TRACK',
      track: track
    });
  },

  fetch: function(tracks){
    Dispatcher.dispatch({
      actionType: "GET_TRACKS",
      tracks: tracks
    });
  }
};

module.exports = RecorderActions;
