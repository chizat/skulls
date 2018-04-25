var program = require('commander');
program.option('-f, --file [type]', 'Filename')
program.option('-s, --skull [type]', 'Skull')
program.parse(process.argv);


var five = require("johnny-five");
var board = new five.Board()
var right = require("./right.js");
var left = require("./left.js");
var middle = require("./middle.js");
var play = require('../meyda-test/meyda-extractor.js');

board.on("ready", function () {
    
    var skull;
    switch(parseInt(program.skull))
    {
        case 1:
            skull = right();
            break;
        case 2:
            skull = middle();
            break;
        case 3:
            skull = left();
            break;
    }
    
    function data(d)
    {
        var num = d.toFixed(2) * 100;
        setTimeout(function () {
            if(num > 0)
                skull.talk();
            else
                skull.stopTalking();
        }, 500);
        
    }
    
    function done()
    {
        skull.close();
        setTimeout(function () {
            console.log("Closing")    
        }, 50000);
        console.log("Done")    
        
    }
    
    play(program.file, "rms", data, done );    
});