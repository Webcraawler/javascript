//this

const container = {
    name: "daniel",
    age: 98,
    welcomeMessage: function(){
        console.log(`${this.name}, welcome to website`)
        // console.log(this)
    }
}

// container.welcomeMessage()
container.name = "david" //context/value changes/updated here so name is david now and this name will now give david
// container.welcomeMessage()

//console.log(this) //this outside of the scope will give empty object //but in browser it gives window
//object in the browser is Window hence this will return Window when printing this there

//this in function -- doesnt work it only works in objects

function one()
{
    let username = "batista"
    console.log(this.username) //this will give undefined - this doesnt work in func
}

// one()


//Arrow func - ()=>{} //in arrow func this return empty object //but in normal func this will return some properties and values
//this is not used in arrow function and normal function - gives undefined in both cases

//syntax

const chai = ()=>{
    id = "12ds4"
    console.log(this.id)
}

// chai()

//normal arrow function with parameter //explicit arrow func
const arroww = (num1,num2)=>{
        return `normal arrow func: ${num1+num2}`
}
console.log(arroww(9,3))


//implicit arrow function //don't need {} and return single line function
const arr2 = (num1,num2)=>(`implicit arrow func: ${num1+num2}`)
console.log(arr2(9,3))

//NOTE - when {} is used in arrow function return is used
//when () is used no return is required