// const name = "raju"//this also does the same thing on backend
// let age = 18

// console.log(name+age+"boy")//not recommended

// //better way to concatenate string
// console.log('name : ${name} age: ${age} boy'); //justlike fstrings in pyhon


//another way to declare string 
const newname = new String('rajesh')//create obj of string
// console.log(newname);

// console.log(newname[2]);
// console.log(newname.length);
// console.log(newname.toUpperCase())//all are methods
// console.log(newname.charAt(3))
// console.log(newname.indexOf('j'))


//more string methods

//trim - to trim the whitespaces in the pass if by mistake the user puts any
let pass = "  12234  "
console.log(pass.trim())

let link = "https://xyz.com/sdkfn%20njvsdkvn"
console.log(link.replace('%20','-'))

console.log(link.includes('xyz'))

console.log(link.split('/'))