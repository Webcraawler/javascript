//two ways to declare an object - object literal and constructors
//singleton is created we objects are made using constructor and not during literals

//constructor syntax
// Object.create()

//object literal -----------------------------------------
//object in js is key , value pair in {}
//key is by default string in js whereas value we can give any datatype

let user = {
    name: "francis",
    age: 123,
    isLoggedIn: true,
    data: [43,23,54,2]
}

//objects are different from array as in array the keys are indexing here we can give whatever key we want
//accessing object 2 ways like array and object
// console.log(user.isLoggedIn)
// console.log(user["data"]) // this is used cuz explained below

//------------imp---
//if some key if defined as string we can't accesses that by dot method 
//also if we have to use a symbol as key it will be converted to string if we use dot method

const sym = Symbol("key1")

let user1 = {
    name: "armin",
    age: 13,
    [sym]: "symbolKey",
    "cant use dot": true,
    isLoggedIn: false,
    data: [43,23,54,2]
}

// console.log(user1.cant use dot)
console.log(user1["cant use dot"])
console.log(typeof user1.sym)
console.log(typeof user1[sym])

//changing---
// user1.name = "rammm"

// console.log(user1)
// Object.freeze(user1)//prevent any changes to the object
// user1.name = "rammmsdgv"
// console.log(user1)

//-------


//-------objects with functions and 'this'

user.hello = function()
{
    console.log("hello js user")
}

console.log(user.hello())

user.hello2 = function(){
    console.log('hello js user, ${this.name}')
}

console.log(user.hello2())