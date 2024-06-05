//more imp methods

const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]

// arr1.push(arr2)
// console.log(arr1) //push take the arr2 as a single element and push it in the array cuz arr in js is mixed type and takes the array as an ele

//-----------concat()
//use new var to store the concated array as the concat returns new array
const newarr = arr1.concat(arr2)
// console.log(newarr)


//better use spread cuz concat can join only 2 array but spread can do multiple
let arr3 = [9,10,11,12]
let spreaded = [...arr1, ...arr2, ...arr3]
// console.log(spreaded)

//if array is multidimensional and we want 1d array -----flat()
let arr4 = [1,2,4,54, [12,6,74],56,7,[56,[7,3,2]]]
let arr5 = arr4.flat(Infinity) //infinity is the depth to which we want to flat if we know thw depth then give the depth vaue dont use infinity
// console.log(arr4)
// console.log(arr5)


//--------------imp -----------Array.isArray/from/of
//usually when data scrapping the data set have all type of value which we have to convert to array for that we use from

let s = "bhbjghfjhhb"
//works ar Math
console.log(Array.isArray(s))
console.log(Array.from(s)) // Array.from(data) this create array out of the given data
//imp--
console.log(Array.from({name: "sbfnmdm"})) //this will return empty array as we have to specify from what we want to make array key or the value

//coverting 
let x = 100
let y=[32,54,7,76,2]
let z = 210

console.log(Array.of(x,y,z))
