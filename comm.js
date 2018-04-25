var program = require('commander');
program.option('-f, --file [type]', 'Filename')
program.option('-s, --skull [type]', 'Skull')
program.parse(process.argv);

console.log("file: ", program.file)
console.log("skull: ", program.skull)