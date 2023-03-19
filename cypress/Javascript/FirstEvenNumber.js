const _ = require('lodash');

const number = [1,3,4,5,7,8]
const evenNumber = _.find(number, n=>n%2===0)
console.log(evenNumber)

const number2 = [1,3,4,5,7,8]
const isEqual = _.isEqual(number, number2)
console.log(isEqual)

const number3 = [10,12]
console.log(_.extend(number, number3))
console.log(number)
console.log(number3)