const user = {
    username : "Saurav",
    price : 999,

    welcomemessage: function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}
// user.welcomemessage(); // Saurav, welcome to website
// console.log(this); // In this context, 'this' refers to the global object (window in browsers)
// user.username = "Swaraj";
// user.welcomemessage(); // Swaraj, welcome to website

function chai(){
    let username = "Saurav";
    // console.log(this.username); // undefined, 'this' refers to the global object, not the user object
    // console.log(username); // Saurav, local variable username is accessible
    
}
// chai(); // undefined, Saurav


//                                        this is Explicit return 
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(5, 10)); // 15

//                                                this is Implicit return in arrow function below two methods, as above is also correct way
// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(5, 10)); // 15

const addTwo = (num1, num2) => (num1 + num2);  // best way to write like this use paranthesis if any object has to pass it will be like ({})
// console.log(addTwo(5, 10)); // 15


// for explame in react like

// const myArray = [1, 2, 3, 4, 5];

// various ways below to iterate over an array

// myArray.forEach(function () {}); // Traditional function syntax
// myArray.forEach(() => {}); // Arrow function syntax
// myArray.forEach(() => ());

//                         node .\03_basics\03_arrow.js