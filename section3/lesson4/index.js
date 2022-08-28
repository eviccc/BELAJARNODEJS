//---importing npm modules
const validator = require('validator') 

//---importing node.js core modules
const fs = require('fs')
fs.writeFileSync('notes.txt', 'This is a notes! Hello Evic is here')

console.log(validator.isURL('https://mead.io')) // Print: true 'importing npm modules'
