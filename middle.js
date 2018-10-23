var skull = require("./skull.js");

var middle = function()
{
    var m = skull();
    m.setRight(24, 20, 100, 90)
    m.setBack(23, 10, 75, 10)
    m.setMouth(22, 45, 90, 50)
    m.setLeft(25, 0, 120, 80)
    m.reset();
    return m
}

module.exports = middle;