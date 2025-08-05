const score = 400
// console.log(score);


const balance = new Number(100)
// console.log(balance); // Number {100}, object wrapper for number

// console.log(balance.toString().length) ;
// console.log(balance.toFixed(2)) ; // 100.00, formats number to 2 decimal places

const otherNumber = 123.891
// console.log(otherNumber.toPrecision(4)); // 123.9, formats number to 4 significant digits
// console.log(otherNumber.toExponential(2)); // 1.24e+2, formats number to exponential notation with 2 decimal places

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // "1,000,000", formats number with commas as thousands separators but now showing in Indian number automatically
// console.log(hundreds.toLocaleString('en-IN')); // "10,00,000", formats number in Indian numbering system


//***************************************** Maths ***************************************************************************************

// console.log(Math) ;
// console.log(Math.abs(-4)) ;
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9)) ;
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));


// console.log(Math.random()); // Random number between 0 and 1
// console.log((Math.random() * 10) +1);// Random number between 1 and 10
// console.log(Math.floor(Math.random() * 10) +1); // Random integer between 1 and 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random integer between 10 and 20

