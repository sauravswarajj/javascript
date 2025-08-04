
        // JavaScript is statically typed language or dyanamically typed language?
        // JavaScript is a dynamically typed language, meaning that variables can hold values of any type and can change types at runtime.

// kis tarah se data ko memory mein store kiya jata hai aur kis tarah se data ko access kiya jata hai

// two types of data types i) Primitive Data Types ii) Non-Primitive Data Types or Reference Data Types

// Primitive Data Types: Number, String, Boolean, Null, Undefined, Symbol, BigInt

const score = 100; // Number
const userName = "Saurav"; // String
const isLoggedIn = true; // Boolean
const outsideTemp = null; // Null
let userEmail; // Undefined

const id = Symbol('123'); // Symbol
const anotherId = Symbol('123'); // Symbol, unique identifier

// console.log(id === anotherId); // false, different symbols

const bigNumber = 1234567890123456789012345678901234567890n; // BigInt, for very large integers



// Non-Primitive Data Types: Object, Array, Function

const heros = ["Shaktimaan", "JuniorG", "Hero"]; // Array
const muObj = {
    name: "Saurav",
    age: 25,
    isLoggedIn: true
}; // Object

const myFunction = function() { // Function
    console.log("Hello World");
}

// console.log(typeof score); // number

// https://262.ecma-international.org/5.1/#sec—11.4.3