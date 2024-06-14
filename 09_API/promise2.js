function getData1(data){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            // console.log("fetching data 1..... ",data)
            // resolve({username:"abc",age:18})
            // resolve({username:"david",age:18})
            resolve(data)
            // reject("ERROR")
        },3000,false)
    })
}

function getData2(data){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            // console.log("async functionality ",data)
            resolve(data)
            // resolve("data2 fetched")
            // reject("ERROR")
        },2000,false)
    })
}


//--------------------------------chaining---------------------------------
//only after the first promise is resolved or rejected we go to the next one 
//so we write then() or catch() inside the first one
// console.log("fetching data1......")
// getData1().then(function(res){
//     console.log(res)
//     console.log("fetching data2......")
//     getData2().then(function(res){
//         console.log(res)
//     })
// })


//---------------------------another type of chaining---------------------

// getData1(2).then(function(res){
//     console.log(res)
//     return getData1(3)
// })
// .then(function(username){
//     console.log(username)
// })
// .catch(function(err){
//     console.log(err)
// })
// .finally(()=>console.log("either resolved or rejected"))


// async function syncc(){
//     // console.log("async await")
//     const res = await getData2(200)
//     console.log(res)
//     const res1 = await getData2(300)
//     console.log(res1)
// }


(async function(){
    console.log("getting data 1...........")
    const res = await getData2(200)
    console.log(res)
    const res1 = await getData2(300)
    console.log(res1)
})();