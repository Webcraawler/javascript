//singleton object

//object using constructor
const myobj = new Object()

myobj.name = "jon"
myobj.age = 18
myobj.gender = "male"

// console.log(myobj)

//--------nesting---------

let newobj = {
    email: "abc@gmail.com",
    name: {
        username: {
            firstname: "jon",
            lastname: "sharma"
        }
    }
}

// console.log(newobj.name?.username) //? - if that nesting is not present helps avoid errors


//------combining objects-----------------------

//const obj5 = Object.assign({},obj1,obj2,obj3)
//{} - is the target where are the object are combined and stored
//if we don't give {} - all the combined value will be stored in first para i.e. obj1
// obj1 == obj5

let obj1 = {1: "a", 2: "b"}
let obj2 = {3: "a", 4: "b"}
let obj3 = {4: "c", 6: "d"}

// const objnew = {obj1,obj2,obj3} //this is not correct as it will take each obj as a single entity and merge it 
// console.log(objnew)

const nobj = Object.assign({},obj1,obj2,obj3)// if 2 key are same the further one will be used like 4: "c" is used here
// console.log(nobj) //also in sorted order


//-------mostly used for concat object is spread like in arrays--------
let neobj = {...obj1, ...obj2, ...obj3}
// console.log(neobj)

//-------------accessing keys and values--------------
console.log(Object.keys(newobj))//this gives array of keys of the object on which we can perform operations
console.log(Object.values(newobj)) //lly for the values

//to check if the key exist 
console.log(newobj.hasOwnProperty('email'))

//Object.entries(object name) - make the object an array of array(key,value)