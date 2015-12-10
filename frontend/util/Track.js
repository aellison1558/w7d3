var KeyActions = require('../actions/key_actions');

function Track(options){
  this.name = options.name;
  this.roll = options.roll;
}

Track.prototype.startRecording = function(){
  this.roll = [];
  this.currentTime = Date.now();
};

Track.prototype.addNotes = function(notes){
  var elapsed = Date.now() - this.currentTime;
  this.roll.push({notes: notes, timeSlice: elapsed});
};

Track.prototype.stopRecording = function(){
  this.addNotes([]);
};

Track.prototype.stopPlaying = function(){
  clearInterval(this.interval);
  this.interval = null;
};

Track.prototype.play = function(){
  if (this.interval) {return;}
  var playBackStart = Date.now();
  var currentNote = 0;
  var roll = this.roll;

  this.interval = setInterval(function(){
    if (currentNote < roll.length){
      if (Date.now() - playBackStart > roll[currentNote].timeSlice) {
        KeyActions.keysPlayed(roll[currentNote].notes);
        currentNote +=1;
      }
    } else {
      this.stopPlaying();
      console.log(this.interval);
    }
  }.bind(this), 10);
};

module.exports = Track;
