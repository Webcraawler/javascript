//----------------scope-------------------------------------

// basic local and global scope
//we dont use var as it is available outside block scope

if(true)
    {
        let a=100
        const b = 200
        var c = 300
    }

// console.log(c)//this should not happen hence we don't use var n only const and let

//--------------------//----------

//when we have child scope inside a parent scope child can access the variables of the parent but can't do the same

one()
function one()
{
    let name = "daniel"

    function two()
    {
        let inname = "victoria"
        console.log(name)
    }

    // console.log(inname)//this wont work bcuz it is in local scope of the func two

    two()
}



//expression of a function used when the func is small
//difference - in expr we cannot access  it before declaration whereas in function we can do
console.log(res(5))
const res = function(num)
{
    return num+2
}

//cuz with declaration we are also holding the value in a variable hence we cant use it before --- this is also know as hoisting

