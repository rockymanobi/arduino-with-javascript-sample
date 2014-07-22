var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var val = 0;
  var pinNo = 2;
  var OUTPUT = 1;

  this.pinMode( pinNo, OUTPUT);

  this.loop(100, function() {
    this.digitalWrite(pinNo, (val = val ? 0 : 1));
  });

});
