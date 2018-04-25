var skull = require("./skull.js");

var skullConfig = function()
{
    var m = skull();
    m.setRight(16, 70, 90, 60)
    m.setBack(17, 60, 100, 90)
    //v TO BE DETERMINED v
    m.setMouth(15, 20, 60, 20)
    m.setLeft(14, 50, 85, 70)
    m.reset();
    return m
}

module.exports = skullConfig;