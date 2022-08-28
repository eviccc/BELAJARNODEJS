
const geocode = require('./geowahaha')
geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})