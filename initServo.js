var five = require("johnny-five");
var keypress = require("keypress");
var board = new five.Board()

keypress(process.stdin);

board.on("ready", function() {
    var pin = 25;
    var min = 0;
    var max = 150;
    var step = 3;
    var center = (min + max) / 2; 

    var servo = new five.Servo({
        pin, range: [min, max]
    });

    servo.to(center);
    console.log(servo.value)
    
    process.stdin.on("keypress", (character, key) => {
        if (key) {
         if (key.name === "q") {
             process.exit(0);
          }
          if(key.name === "up"){
            servo.to(servo.value + step);
            console.log(servo.value);
          }
          if(key.name === "down"){
            servo.to(servo.value - step);
            console.log(servo.value);
          }
        }
    });    
});
