var exec = require('cordova/exec');

var ToastyPlugin = {
  show: function(message, duration, fnSuccess, fnError){
    var options = {};
    options.message = message;
    options.duration = duration;
    exec(fnSuccess, fnError, "ToastyPlugin", "show", [options]);
  }
};

module.exports = ToastyPlugin;