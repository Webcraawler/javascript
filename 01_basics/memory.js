//stack (primitive) , Heap (Non-primitive)

//primitive are stored in stack and their copy is shared not the original value
//whereas non primitive are stored in heap and reference of the original value is given and will change the original value too if any changes are made

// eg

let oldName = "Raju"
let newName = oldName //newName will be given a copy of oldname and any changes to the new name wont change the old name

newName = "suraj" //oldname is not changed when newname is changed as it only has the copy of oldname

console.log(oldName);
console.log(newName);

//Heap

let oldObj = {
    email: "abc@gamil.com",
    age: 18
}

let newObj = oldObj
newObj.email = "xyz@gmail.com" //the value of the oldobj will also be changed as old obj reference was passed to newobj so any cchange to newobj changes oldobj too


console.log(oldObj.email);
console.log(newObj.email);