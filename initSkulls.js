var five = require("johnny-five");
var keypress = require("keypress");
var board = new five.Board()
var skull = require("./skull.js");
var middleClass = require("./right.js");

keypress(process.stdin);

board.on("ready", function () {
    var middle = middleClass();
    var step = 5;

    process.stdin.on("keypress", (character, key) => {
        if (key) {
            if (key.name === "q") {
                process.exit(0);
            }
            if (key.name === "1") {
                middle.left.to(middle.left.value + step)
                console.log("left", middle.left.value)
            }
            if (key.name === "2") {
                middle.left.to(middle.left.value - step)
                console.log("left", middle.left.value)
            }
            if (key.name === "3") {
                middle.right.to(middle.right.value + step)
                console.log("right", middle.right.value)
            }
            if (key.name === "4") {
                middle.right.to(middle.right.value - step)
                console.log("right", middle.right.value)
            }

            if (key.name === "down") {
                middle.mouth.max();
            }

            if (key.name === "up") {
                middle.mouth.min();
            }
            if (key.name === "left") {
                middle.turnLeft(step);
            }
            if (key.name === "right") {
                middle.turnRight(step);
            }
            if (key.name === "o") {
                middle.openClose();
            }
            if (key.name === "m") {
                middle.lowerHead(step);
            }
            if (key.name === "j") {
                middle.raiseHead(step);
            }
            if (key.name === "r") {
                middle.reset();
            }
        }
    });

    process.stdin.setRawMode(true);
    process.stdin.resume();

    console.log("Press 'q' to quit.");
});