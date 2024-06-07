// for of loop -- its like range based for loop in cpp
// eg
// for(auto it: array_name)
//     {
//         cout<<it
//     }

//--------------for of------------

let myarr = [2,32,1,53,6]

for(const it in myarr)// for in gives index//key
    {
        console.log(it,":",myarr[it])
    }


//--------------Maps--------------
//map is object - unique value // remembers the order of insertion

let mymap = new Map()

mymap.set("a",3)
mymap.set("b",6)
mymap.set("c",7)
mymap.set("a",8)

// console.log(mymap)

for (const [key,value]/*deconstruction of the map */ of mymap) {
    // console.log(key,"->",value)
    // console.log(key.first)
}

//----------------object are not iterable by for of loop------------------

// let obj = {
//     name: "ahds",
//     age: 13
// }

// for(const [key,value] of obj)
//     {
//         console.log(key,"->",value)
//     }

//-----------------------for in loop----------------------

// for iterating an obj for in loop is used


let obj = {
    name: "ahds",
    age: 13
}

for(const key in obj)
    {
        // console.log(key,":",obj[key])
    }