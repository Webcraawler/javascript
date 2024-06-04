//Dates - future proposal making dates as accessable as Math class

let mydate = new Date()

// console.log(mydate)//not readable
// console.log(mydate.toString()) //better readability

// //more to_____() function on date
// console.log(mydate.toDateString()) // date in string
// console.log(mydate.toLocaleString()); // mm/dd/yy format and global time



// date is object datatype
console.log(typeof(mydate));

//own created date month in js start with 0 i.e. jan - 0

// let createdDate = new Date(2024,10,26) // format is yy,mm,dd {month start with 0(jan)}
// console.log(createdDate.toDateString())

//date with time yy,mm,dd,hr,min,sec
// let newcreate = new Date(2024,5,5,11,45,55)
// console.log(newcreate.toLocaleString()) //print date with time

// //to take in specific format we can give "yy-mm-dd" //can also do in mm-dd-yy
// let createdDate = new Date("2024-11-15") // in this format jan = 01
// console.log(createdDate.toDateString());


//timestamp 
//-----------------------------timestamp--------------
//Date. now() returns the number of milliseconds since January 1, 1970
let mytime = Date.now()
console.log(mytime) //this give time in ms since 1970


//we can get timestamp from the date
//getMonth() - to get the month of the given date -- month is started from 0 so add one
console.log(mydate.getMonth()+1) //return the month of the date
//similarly for all getMethods()
console.log(mydate.getMinutes()) //the minutes for this date according to local time
console.log(mydate.getDay())// mon -1 //tue-2//wed-3//.........

//---------------------toLocaleString--------

console.log(mydate.toLocaleString('Default',{
    weekday: "long",
    timeZoneName: "long"
}))