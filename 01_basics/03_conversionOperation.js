// //conversion from number to string and vice versa

let score = "33"
console.log(typeof(score))

//conversion is some concept of datatype class object 
let scoreInNumber = Number(score)
console.log(typeof(scoreInNumber))

//impure number conversion
// let value = "33abc"
let value  = null

let changed = Number(value)
console.log(typeof(changed))
console.log(changed)//NaN - not a number since the value was not a pure number so check before conversion

//num to string
let numVal = 33
console.log(typeof(numVal))

let numToString = String(numVal)
console.log(typeof(numToString))
console.log(numToString)

//Number or String to boolean 
let boolVal = 255 //anything except 0 is true when converted to boolean even negative numbers

let boolCon = Boolean(boolVal)
console.log(boolCon);

let s = "sdf" //empty string when converted ->false //Non empty ->true
let sToBool = Boolean(s)
console.log(sToBool);