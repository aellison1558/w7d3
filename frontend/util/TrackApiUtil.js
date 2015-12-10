var RecorderActions = require('../actions/recorder_actions');

var TrackApiUtil = {
  fetch: function(){
    $.get('/tracks', {}, function(response){
      RecorderActions.fetch(response);
    });
  },

  createTrack: function(data){
    $.ajax({
        url: '/tracks',
        type: 'POST',
        dataType: 'json',
        data: {track: data},
        success: function(response){
          RecorderActions.saveTrack(response);
          // console.log("hi");
        }
    });
  },

  destroy: function(track){
    $.ajax({
      url: '/tracks/' + track.id,
      type: 'DELETE',
      success: function(){
        RecorderActions.deleteTrack(track);
      }
    });
  }
};

module.exports = TrackApiUtil;
