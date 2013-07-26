var exec = require('cordova/exec');
/**
 * Constructor
 */
function MyPlugin() {}

MyPlugin.prototype.sayHello = function() {
  exec(function(result){
      // result handler
      alert(result);
    },
    function(error){
      // error handler
      alert("Error" + error);
    }, 
    "MyPlugin", 
    "sayHello", 
    []
  );
}

var myPlugin = new MyPlugin();
module.exports = myPlugin