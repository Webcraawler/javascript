//object deconstruction  - to make accessing the value of the object clean
//we declare a pseudo or its own name for accessing and don't have to use Object_name.Key to access the value

const course = {
    courseName: "JS",
    courseFee: 1233,
    courseInst: "david"
}

//course.courseInst - this will be used every time we want use david
//deconstruction syntax

const {courseInst: Inst} = course //objectname //can also make it short

console.log(Inst) //don't need to use full course.courseInst

