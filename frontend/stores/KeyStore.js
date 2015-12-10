var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/Dispatcher');


var KeyStore = new Store(Dispatcher);
var _keys = [];

KeyStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "KEY_PRESSED":
      if (_keys.indexOf(payload.noteName) === -1) {
        _keys.push(payload.noteName);
      }
      KeyStore.__emitChange();
      break;
    case "KEY_PLAYED":
      _keys = payload.keyNames;
      KeyStore.__emitChange();
      break;
    case "KEY_RELEASED":
      var idx = _keys.indexOf(payload.noteName);
      if (idx > -1) {
        _keys.splice(idx, 1);
        KeyStore.__emitChange();
      }
      break;
  }
};

KeyStore.all = function() {
  return _keys.slice();
};

module.exports = KeyStore;
