var Dispatcher = require('../dispatcher/Dispatcher');

var KeyActions = {
  keyPressed: function(key){
    Dispatcher.dispatch({
      actionType: "KEY_PRESSED",
      noteName: key
    });
  },

  keysPlayed: function(keys){
    Dispatcher.dispatch({
      actionType: "KEY_PLAYED",
      keyNames: keys
    });
  },

  keyReleased: function(key){
    Dispatcher.dispatch({
      actionType: "KEY_RELEASED",
      noteName: key
    });
  }
};

module.exports = KeyActions;
