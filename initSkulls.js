var five = require("johnny-five");
var keypress = require("keypress");
var board = new five.Board()
//	port: "COM6"
//});
keypress(process.stdin);

board.on("ready", function() {
  var servo = new five.Servo(13);
  var currentPosition = servo.value;
    console.log("position", currentPosition)
    
    var middle = skull();
    middle.setRight(14, 40, 100)
    middle.setBack(17, 35, 90)
    middle.setMouth(15, 40, 120)
    middle.setLeft(16, 20, 80)
    
  process.stdin.on("keypress", (character, key) => {
    if (key) {
     if (key.name === "q") {
         process.exit(0);
      }
      if (key.name === "1") {  
             middle.left.to(middle.left.value + 1)
             console.log("left", middle.left.value)
      }
      if (key.name === "2") {  
             middle.left.to(middle.left.value - 1)
             console.log("left", middle.left.value)
      }
      if (key.name === "3") {  
             middle.right.to(middle.right.value + 1)
             console.log("right", middle.right.value)
      }
      if (key.name === "4") {  
             middle.right.to(middle.right.value - 1)
             console.log("right", middle.right.value)
      }

      if (key.name === "down") {
          middle.mouth.max();
      }

      if (key.name === "up") {
          middle.mouth.min();
      }
      if (key.name === "left") {
          middle.turnLeft(1);
      }
      if (key.name === "right") {
          middle.turnRight(1);
      }
      if (key.name === "o") {
          middle.openClose();
      }
      if (key.name === "m")
          {
              middle.lowerHead(2);
          }
      if (key.name === "j")
          {
              middle.raiseHead(2);
          }
      if (key.name === "r")
          {
              middle.reset();
          }
	}
  });

  process.stdin.setRawMode(true);
  process.stdin.resume();

  console.log("Press 'q' to quit.");
});

function skull(){
    
    var mouth;
    var back;
    var right;
    var left;
    
    function reset()
    {
        this.left.center();
        this.right.center();
        this.mouth.min();
        this.back.min();
    }
    
    function setLeft(pin, min, max)
    {
        this.left = new five.Servo({
            pin: pin, range: [min, max]
        });
        this.left.center();
    }
    
    function setRight(pin, min, max)
    {
        this.right = new five.Servo({
            pin: pin, range: [min, max]
        });
        this.right.center();
    }
                                        
    function setBack(pin, min, max)
    {
        this.back = new five.Servo({
            pin: pin, range: [min, max]
        });
        this.back.center();
    }
                                   
    function setMouth(pin, min, max)
    {
        this.mouth = new five.Servo({
            pin: pin, range: [min, max]
        });
        this.mouth.min();
    }
    
    function openMouth(distance)
    {
        this.mouth.to(this.mouth.value + distance)
        console.log("mouth", this.mouth.value);
    }
    function closeMouth(distance)
    {
        this.mouth.to(this.mouth.value - distance)
        console.log("mouth", this.mouth.value);
    }
    function turnLeft(distance)
{
    this.left.to(this.left.value - distance)
    this.right.to(this.right.value + distance)
}
        function turnRight(distance)
{
    this.left.to(this.left.value + distance)
    this.right.to(this.right.value - distance)
}
    function raiseHead(distance)
    {
        this.back.to(this.back.value - distance)
        console.log("back", this.back.value);
    }
    function lowerHead(distance)
    {
        this.back.to(this.back.value + distance)
        console.log("back", this.back.value);
    }
    function openClose()
    {
        this.mouth.max();
        while(this.mouth.isMoving);
        {}
        this.mouth.min();
            
        
        
    }

                                    
    return {
        reset,
        openClose,
        lowerHead,
        raiseHead,
        turnRight,
        turnLeft,
        closeMouth,
        openMouth,
    setMouth,
    setBack,
    setRight,
    setLeft,
        left,
        right,
        back
                                    
    }
}