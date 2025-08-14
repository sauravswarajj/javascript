//          truthy

const userEmail = []  // it is truthy because it's an object

if (userEmail) {
//   console.log('Got user email');
} else {
    // console.log("Don't have user email");    
}

// truthy values
// "0", "false", "null", "undefined", "NaN", "", 0, -0, 0n, [], {}, function(){} // these are falsy values

// falsy values
// false, 0, -0, "", null, undefined, NaN, 0n(BigInt) // these are falsy values


//    check array is empty or not
if (userEmail.length === 0) {
    // console.log("Array is empty");   
}

//   check object is empty or not
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null or undefined check

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10; // null is falsy, so it will return 10
// val1 = undefined ?? 10; // undefined is falsy, so it will return 10
// val1 = null ?? 15 ?? 20; // null is falsy, so it will return 15
// console.log(val1); // 5, because val1 is not null or undefined


// Ternary Operator: shorthand for if-else

    // condition ? expressionIfTrue : expressionIfFalse
    //    or,
    // condition ? true : false

    const iceTeaPrice = 100;

    iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");