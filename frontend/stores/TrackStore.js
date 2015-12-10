var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/Dispatcher'),
    Track = require('../util/Track');


var TrackStore = new Store(Dispatcher);
var _tracks = [];

TrackStore.addTrack = function(track) {
  var newTrack = new Track(track);
  _tracks.push(newTrack);
};

TrackStore.all = function() {
  return _tracks.slice();
};

TrackStore.deleteTrack = function(track) {
  var idx = _tracks.indexOf(track);
  if (idx > -1) { _tracks.splice(idx, 1); }
};

TrackStore.__onDispatch = function(payload) {
  switch (payload.actionType){
    case "ADD_TRACK":
      TrackStore.addTrack(payload.track);
      TrackStore.__emitChange();
      break;
    case "DELETE_TRACK":
      TrackStore.deleteTrack(payload.track);
      TrackStore.__emitChange();
      break;
    case "GET_TRACKS":
      payload.tracks.forEach(function(track){
        TrackStore.addTrack(track);
      });
      TrackStore.__emitChange();
      break;
  }
};

module.exports = TrackStore;
