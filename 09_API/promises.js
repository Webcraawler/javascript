 //promise is an object representing eventual completion or failure of the operation
 //resolve callback hell
 //syntax

 const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        // console.log("Async task is complete")
        // resolve()
    },1000)
 })

 promiseOne.then(function(){
    console.log("promise consumed")
 })

//------------------------------------------
//  new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("async task 2")
//         resolve()
//     },1000)
//  }).then(function(){
//     console.log("resolved")
//  })
//--------------------------------------

//passing parameter in resolve ------ generally objects/array

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(()=>{
            resolve({username:'david',email:'qwe@gmail.com'})
    },2000)
})


promiseThree.then(function(user){
    console.log(user)
})


//-----------------------------------impp ------- reject--------------------------------

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = true
    if(!error){
        resolve({username:"william",password:"1234"})
    }
    else{
        reject("ERROR")
    }
    },2000)
})

//------------------------------imp----------------------------------------
//catch() -- like then() connects to resolve() ----catch() - -connects to reject handles error
// so return of one then() goes to the next then()
promiseFour
.then(function(user){
    console.log(user)
    return user.username //this return goes to the next then ---chaining
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=> console.log("the promise is either resolved or rejected"))

//finally() - ---will always print either rejected or resolved



//-----------------------------async await------------------------------

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = true
    if(!error){
        resolve({username:"James",password:"1234"})
    }
    else{
        reject("ERROR : JS stopped")
    }
    },2000)
})

async function promiseComsumed(){
    try{
        const response = await promiseFive
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

promiseComsumed()

//-------------------------------fetch()-------------------
//using async await

// async function getAllUsers(){
//     try{
//         const response = await fetch("https://randomuser.me/api/")
//         // console.log(response)

//         const data = await response.json()
//         console.log(data)
//     }
//     catch(error){
//         console.log("E: ",error)
//     }
// }

// getAllUsers()


//----------------------fetch() using then() catch()---------------------

fetch("https://randomuser.me/api/")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))