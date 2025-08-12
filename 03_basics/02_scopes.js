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

    // console.log("Inside block:", a); // 10
    
}

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // 30, var is function scoped or globally scoped, so it is accessible here



// nested scope example

function one(){
    const username = "Saurav";

    function two(){
        const website = "saurav.com";
        // console.log(username); // Saurav, can access username from outer function
        
    }
    //  console.log(website); // ReferenceError: website is not defined, cannot access website from outer function
    two(); // Call the inner function to execute it
}
// console.log(username); // ReferenceError: username is not defined, cannot access username from global scope
one(); // Call the outer function to execute it


if (true) {
    const username = "Saurav";

    if (username === "Saurav") {
        const website = "swaraj.com";
        console.log(username + website);
    }
    // console.log(website); // ReferenceError: website is not defined, cannot access website from outer block
}
// console.log(username); // ReferenceError: username is not defined, cannot access username from global scope


// +++++++++++++++++++++++ Interesting Example ++++++++++++++++++++++++++++++

function addone(num){
    return num + 1;
}

addone(5); // 6

const addTwo = function(num){
    return num + 2;
}
addTwo(5); // 7  