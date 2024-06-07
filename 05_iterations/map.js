//-------------map = return on operations or condition unlike filter which return only on filter----------------

let arr = [1,232,545,657,78,332]

// let res = arr.map( (item)=> {
//     return item+10
// })

// console.log(res)

//--------------chaining = multiple map or filter ------------------

let res1 = arr.map( (item) => item*10).map((item)=> item + 5).filter((item)=> item>1000)
console.log(res1)