//using lines of codes multiple time by packing it in a package and using that

//syntax

function show()
{
    console.log("javascript")
    console.log("frontend")
}

//difference between reference and execution of the function
show //this will be the reference of the function
// show() //this is the execution of the function
// show()

function add(num1,num2)
{
    console.log(`sum: ${num1+num2}`)
}

// add(3,4)
// add(3, "4")
// add(3, "a")

//-------return------

function add1(num1,num2)
{
    return `sum of 2 parameters: ${num1+num2}`
}

const res = add1(3,6)
// console.log(res)


function user(username = "roy") //default variable
{
    if(username===undefined) //check if argument was passed or not
        {
            console.log("pass argument")
            return
        }
        return `${username} logged in`
    }

const out = user("cutting")

console.log(out)