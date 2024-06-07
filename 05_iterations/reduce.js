//---------------reduce = used when we need to get a single output using the array

// let val = [1,234,34]

// let res = val.reduce( (accumulator,currentvalue)=>{
//     console.log(`accumulator: ${accumulator}, currentValue: ${currentvalue}`)
//     return accumulator+currentvalue

// },15)// 0 - intial value of accumulator

// console.log(res)



//---------------exer---------


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

//add price

let result = shoppingCart.reduce( (acc,item) => acc+item.price, 0)
console.log(result)