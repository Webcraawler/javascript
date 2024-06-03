 //same datatype comparisons are basic
//  console.log(2>1)
//  console.log(2<=1) //similarty other


//issue when we compare different datatypes 
// console.log(2>"01")//js will convert the string to num but this should be avoid

//null comparison

// console.log(null>0)
// console.log(null == 0)
// console.log(null>=0)
// console.log(null < 1)//comparison op convert null to num(0) first then compare whereas equality check doesn't
//also sometimes null can be converted into NaN instead of 0 so avoid 


// === this also compare the datatype so false if diff datatypes
console.log("2" == 2)
console.log("2" === 2);

//Non - primitive(refernce type) --array,objects,functions
const hero = ["asnddf",1,"dvsd",true,null]
console.log(hero[3]);

//objects = {}
let myObj = {
    name:"raju",
    age:18
}