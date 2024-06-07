// default true or false values

// empty string "" -- false 
// " "--not a empty string whitespace is here -- true


//falsy value ---------------------
 //false, "" ,0 , -0, BigInt 0n, null, undefined, NaN

//truthy value
 // "0" , 'false', " ", [], {} ,function(){} //undecalred func are also true

 //to check obje

 const obj = {}

 if(Object.keys(obj).length === 0)
    {
        // console.log("object is empty")
    }



// Nullish Coalescing Operator (??) : null undefined
// for the safety if the data we get is null and undefined and we don't know it then it is helpful

let val1 = 5 ?? 10
console.log(val1)

let val2 = null ?? 14
console.log(val2)

let val3 = undefined ??45
console.log(val3)

// terninary operator
// condition ? true_statement : false_statement

let val = 4>5 ? 10 :15
console.log(val)

let value = 100%3===0 ? console.log("divisible by 3") : console.log("not divisible by 3")