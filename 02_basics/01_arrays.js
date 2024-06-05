//array in js can be of mix type and of dynamic size
//array is js is 0-based indexing

let myarr = [1,'d',"dsgf",true] //this is correct and we can also add elements further

//another way using object like for every datatype
let newarr  = new Array(1,235,4,3)


//------------------------------array methods---------------------------

// 1. push() , pop() like stack in cpp

myarr.push(3)
myarr.push(5)
// console.log(myarr)

myarr.pop()
// console.log(myarr)

//unshift() - this add element in the start of the array -not recommended cuz has to change the index of the elememts in the array 
myarr.unshift(9)
// console.log(myarr)
//shift() - remove the element from the start //shift and unshift is like push and pop but works at start
myarr.shift()
// console.log(myarr)

//arrayname.includes() like find gives bool value


//-----------slice()  splice()-----------------

//slice() doesn't change the original array and also not include ele at end indx
//splice() does change the array and also includes ele at end ind

let arr = [1,2,3,4,5,6,7]
console.log("original array -",arr)

console.log(arr.slice(0,3))
console.log("org arr after slice- ",arr)

console.log(arr.splice(0,3))
console.log("org arr after slice- ",arr)