var five = require("johnny-five");
var keypress = require("keypress");
var pizzicato = require("pizzicato");
var board = new five.Board();

board.on("ready" function() {

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