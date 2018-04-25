var skull = require("./skull.js");

var skullConfig = function()
{
    var m = skull();
    m.setRight(32, 40, 90, 70)
    m.setBack(33, 60, 100, 70)
    m.setMouth(31, 10, 50, 10)
    m.setLeft(30, 60, 90, 90)
    m.reset();
    return m
}

module.exports = skullConfig;