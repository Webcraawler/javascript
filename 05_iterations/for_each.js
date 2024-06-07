//forEach is an inbuilt function of the array 
//forEach are function without name that take element of the array as parameter 

let arr = [332,234,53,12]

arr.forEach( function (item)/* item is the ele of arr as para to func*/{
    // console.log(item)
})

//using arrow function 

let val = [54,234,754,23,765]

// val.forEach( (item)=>{
//     console.log(item*2)
// })


// two more common para -- index , arr
val.forEach( (item,index,arr)=>{
    // console.log(item*2,index,arr)
})


//-------------------forEach mst imp use----------------------
//accessing array of objects

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item)=>{
    console.log(item)
    console.log(item.languageFileName)
    console.log(Object.keys(item))
})