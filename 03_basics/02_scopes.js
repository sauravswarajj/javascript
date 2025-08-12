// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);


//  outside of block scoped it is global scoped
let a = 300

if (true) {  // inside this all is block scoped
    let a = 10; // Block scoped
    const b = 20; // Block scoped
    // var c = 30; // Function scoped or globally scoped if not in a function

    console.log("Inside block:", a); // 10
    
}

console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // 30, var is function scoped or globally scoped, so it is accessible here
