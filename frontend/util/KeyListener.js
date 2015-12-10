var Dispatcher = require('../dispatcher/Dispatcher'),
    KeyActions = require('../actions/key_actions');

var Mapping = {
  83: "A",
  68: "B",
  70: "C",
  71: "D",
  72: "E",
  74: "F",
  75: "G"
};

var installKeydown = function(){
  $(document).on("keydown", function(e){
    KeyActions.keyPressed(Mapping[e.keyCode]);
  });
};

var installKeyup = function(){
  $(document).on("keyup", function(e){
    KeyActions.keyReleased(Mapping[e.keyCode]);
  });
};

var KeyListener = function(){
    installKeydown();
    installKeyup();
  };

module.exports = KeyListener;
