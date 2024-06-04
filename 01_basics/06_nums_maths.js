//declarations of number type

const score = 500 //automatic typecasting
// const val = new Number(400) //forced casting

// console.log(val)
// console.log(score)

// console.log(score.toFixed(2))//to show the needed decimal points

// const num = 123.85
// console.log(num.toPrecision(4))//should be atleast equal to non decimal length i.e. shouldnot be less than 3


//**************************Maths************************************

//maths function  - math.func(para)

const v = 2.4
// console.log(Math.pow(v,2))
// console.log(Math.round(v))//ceil and floor rarely used mostly round is used
// console.log(Math.abs(-34))//give positive value 
// console.log(Math.min(2,32,534,78))

//imp use of Math is done in Math.random // Math.random() range [0,1]

console.log(Math.random()) //[0,1]
console.log(Math.random()*10) //[1,10]
// console.log((Math.random()*10)+1) //in case of 0.0... so atleast 1
console.log(Math.floor(Math.random()*10)+1) //min - 1

//syntax of min and max range

const min =10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min) //so atleast min value will be displayed

