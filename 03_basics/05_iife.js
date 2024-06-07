//Immediately Invoked Function Expression (IIFE)
//used to avoid global scope contamination/pollution and immediately running some task
//like connecting database as soon as program is started


//func call syntax - func()
//iife syntax -- (function declaration)()
//()(); always put ; to end iife
(function one()
{
    //named iife
    console.log("DB connected")
})();

//no use of function call


( (name)=>{
    console.log("arrow function in iife ",name)
})("david");


//(function declaration)(argument passing);