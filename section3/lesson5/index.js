//---printing in color
const chalk = require('chalk') //printing in color

const greenMsg = chalk.green('Success!!!!!')
console.log(greenMsg)

const bluebg = chalk.blue.inverse.bold('Success!!!!!')
console.log(bluebg)