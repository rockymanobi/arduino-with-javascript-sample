var five = require("johnny-five"),
    // or "./lib/johnny-five" when running from the source
    board = new five.Board();

board.on("ready", function() {

  var val = 0;
  var pinNo = 2;
  var OUTPUT = 1;

  // Set pin 13 to OUTPUT mode
  this.pinMode( pinNo, OUTPUT);

  // Create a loop to "flash/blink/strobe" an led
  this.loop(100, function() {
    this.digitalWrite(pinNo, (val = val ? 0 : 1));
  });

});
