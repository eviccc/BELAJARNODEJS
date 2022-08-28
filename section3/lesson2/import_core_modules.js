//importing node.js core modules

const validator = require('validator')

const fs = require('fs')

fs.writeFileSync('notes.txt', 'This is a notes! Hello Evic is here')

console.log(validator.isURL('https/mead.io')) // Print: true