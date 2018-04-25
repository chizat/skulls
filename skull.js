var five = require("johnny-five");

var skull = function (board) {

    var mouth;
    var back;
    var right;
    var left;

    function reset() {
        this.left.home();
        this.right.home();
        this.mouth.home();
        this.back.home();
    }

    function setLeft(pin, min, max, startAt) {
        this.left = new five.Servo({
            pin: pin, range: [min, max], startAt: startAt
        });
    }

    function setRight(pin, min, max, startAt) {
        this.right = new five.Servo({
            pin: pin, range: [min, max], startAt: startAt
        });
    }

    function setBack(pin, min, max, startAt) {
        this.back = new five.Servo({
            pin: pin, range: [min, max], startAt: startAt
        });
    }

    function setMouth(pin, min, max, startAt) {
        this.mouth = new five.Servo({
            pin: pin, range: [min, max], startAt: startAt
        });
        this.mouthMax = this.mouth.range[1];
        this.mouthMin = this.mouth.range[0];
        this.mouthCenter = (this.mouthMax + this.mouthMin) / 2;
    }
    function open() {
        this.mouth.to(this.mouth.max);
    }
    function close() {
        console.log("close", this.mouthMin)
        this.mouth.to(this.mouthMin);
    }
    function openMouth(distance) {
        this.mouth.to(this.mouth.value + distance)
        console.log("mouth", this.mouth.value);
    }
    function closeMouth(distance) {
        this.mouth.to(this.mouth.value - distance)
        console.log("mouth", this.mouth.value);
    }
    function turnLeft(distance) {
        //this.left.to(this.left.value - distance)
        this.right.to(this.right.value + distance)
        console.log("right", this.right.value);
    }
    function turnRight(distance) {
        //this.left.to(this.left.value + distance)
        this.right.to(this.right.value - distance)
        console.log("right", this.right.value);
    }
    function raiseHead(distance) {
        this.back.to(this.back.value - distance)
        console.log("back", this.back.value);
    }
    function lowerHead(distance) {
        this.back.to(this.back.value + distance)
        console.log("back", this.back.value);
    }
    function openClose() {
        this.mouth.max();
        while (this.mouth.isMoving);
        { }
        this.mouth.min();
    }
    function stopTalking() {
        this.mouth.stop();
        this.mouth.min();
    }
    function talk() {
        this.mouth.sweep({
            range: [this.mouthMin, this.mouthMax - 10],
            interval: 150
        });
    }

    function isMoving(){
        return this.mouth;
    }
    
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
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
        back,
        talk,
        stopTalking,
        close,
        isMoving
    }
}

module.exports = skull;