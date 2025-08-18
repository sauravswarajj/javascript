// for each loop
// basically ye loop ka hi parameter hai by default hi inject kr rkha hai, agar arrays aayenge to loop to lagana hi padega kuch iterate kr ke values to chahiye hongi n

//this is higher order function
// ye loop bhi iterable hai, isliye ye bhi for of loop ki tarah hi kaam karega

const coding = ["js", "Python", "Ruby", "Java", "Cpp"];

// as we write function like function name (){} but in forEach loop we don't need name because it is saying call back function so simply write function () {} done.
coding.forEach( function (val){ 
    // console.log(val);   
})

//    Arrow function

coding.forEach( (val) => {
    // console.log(val);
})



function printMe(item) {
    // console.log(item);    
}

coding.forEach(printMe); // only giving references not execute ()

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr); // item is value, index is index of that value and arr is the array itself
})
 

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js",
    },
    {
        languageName: "Java",
        languageFileName: "java",
    },
    {
        languageName: "Python",
        languageFileName: "py",
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName, item.languageName); // accessing object properties
})