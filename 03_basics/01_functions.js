
function sayMyName(){
    // console.log("S");
    // console.log("a");
    // console.log("u");
    // console.log("r");
    // console.log("a");
    // console.log("v"); 
}

// sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2); 
// }
// addTwoNumbers(5, 10); //15
// addTwoNumbers(20, "10"); //2010
// addTwoNumbers(20, null); //20
// addTwoNumbers(20, undefined); //NaN
// addTwoNumbers(20, true); //21
// addTwoNumbers(20, false); //20


function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2;
    // return result;
    return number1 + number2; // This will return the sum of the two numbers
}

const result = addTwoNumbers(5, 10); //15
// console.log("Result is:", result); // Result is: 15


// function loginUserMessage(userName){
//     return `Welcome ${userName}, you are logged in!`;
// }

// // console.log(loginUserMessage("Saurav")); // "Welcome Saurav, you are logged in!"
// console.log(loginUserMessage());


function loginUserMessage(userName){
//    if(userName === undefined){                           another way to check is
if(!userName){ // This checks if userName is falsy (undefined, null, etc.)  and ! make true value to false and false value to true
        console.log("Please provide a username.");
        return
    }
        
    return `Welcome ${userName}, you are logged in!`;
}

// console.log(loginUserMessage()); // it will show above message with undefined value
console.log(loginUserMessage("Saurav")); // Saurav