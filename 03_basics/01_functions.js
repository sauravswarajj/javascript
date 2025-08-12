
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
// console.log(loginUserMessage("Saurav")); // Saurav



// function calculateCartPrice(num1) {
//     return num1;
// }

// console.log(calculateCartPrice(2));


// function calculateCartPrice(...num1) { // rest operator allows us to pass any number of arguments, it is also know as spread operator but in this case it is rest operator
//     return num1;
// }

// console.log(calculateCartPrice(200, 400, 500));


function calculateCartPrice(val1, val2, ...num1) { 
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
    name: "Saurav",
    price: 199
}

function handleObject(anyObject){
    // console.log(`Name is: ${anyObject.name} and price is: ${anyObject.price}`);
    
}

// handleObject(user); // Name is: Saurav and price is: 199

handleObject({
    name: "Swaraj",
    price: 299
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]; // This will return the second value of the array
}

// console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue([200, 300, 500, 1000])); // 400








//               node .\03_basics\01_functions.js