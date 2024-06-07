//forEach does not return anything -- con

const arr = [23,453,12,65,3]

let res = arr.forEach( (item)=>{
    return item
})
// console.log(res) //forEach wont return anything gives undefined



//-----------------filter------------------------------------

//to overcome the same we use another in built function filter
// console.log("using filter")
let out = arr.filter( (item)=>{
    return item>10
})//this will return the array with values >10
// console.log(out)



//doing same using forEach
// console.log("using forEach")
let newarr = []
arr.forEach( (item)=>{
    if(item>10)
        {
            newarr.push(item)
        }
})
// console.log(newarr)


//---------------exercise on filter = filter returns on condition-------------------------

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


let result = books.filter((item)=> item.genre==="History")
// console.log(result)

let res2 = books.filter( (item)=>item.publish>2000)
// console.log(res2)

res2 = books.filter( (item)=>{
    return item.publish>=1995 && item.genre==="Science"
})

console.log(res2)
