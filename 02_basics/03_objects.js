// singleton
// Object.create() method

//object literals

// interview question about symbol
const mySym = Symbol("key1"); // unique identifier


const JsUser = {
    name: "Saurav",
    "ful name": "Saurav Jaishwal", // property with space in name
    [mySym] : "mykey1",
    age: 26,
    location: "Delhi",
    email: "saurav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); // Accessing property using bracket notation
// console.log(JsUser["ful name"]); // Accessing property with space in name
// console.log(JsUser[mySym]); // Accessing property using symbol

JsUser.email = "saurav@chatgpt.com"; // Changing the email property
// Object.freeze(JsUser); // Freezes the object, preventing any changes
JsUser.email = "saurav@grok.com"; // This will not change the email
// console.log(JsUser);


// now add function

JsUser.greeting = function() {
    console.log("Hello Js User");
}
JsUser.greetingTwo = function() {
    console.log(`Hello Js User, your name is ${this.name}`);
}

console.log(JsUser.greeting()); // Calling the greeting function
console.log(JsUser.greetingTwo());