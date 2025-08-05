 let score = true

//  console.log(typeof score);
//  console.log(typeof(score));
 
 let valueInNumber = Number(score);
//   console.log(typeof valueInNumber);
//   console.log(valueInNumber);
 
// "33" => 33
// "33abc" => NaN (Not a Number), type is number
//  true => 1
//  false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
//  console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "Saurav" => true
// "" => false
// null => false
// undefined => false

let someNumber = 33

let stringNumber = String(someNumber)
//  console.log(stringNumber); // "33"
//  console.log(typeof stringNumber); // string


// ******************* Operations *******************

let value = 3
let negValue = -value
// console.log(negValue); // -3

// console.log(2+2); // 4
// console.log(2-2); // 0
// console.log(2*2); // 4
// console.log(2/2); // 1
// console.log(2%2); // 0
// console.log(2**3); // 8, exponentiation operator

let str1 = "Saurav"
let str2 = "Swaraj"
let fullName = str1 + " " + str2
// console.log(fullName); // "Saurav Swaraj"

//  console.log("1" + 2); // "12", string concatenation
//  console.log(1 + "2"); // "12", string concatenation
//  console.log("1" + 2 + 3); // "123", string concatenation
//  console.log(1 + 2 + "3"); // "33", addition before concatenation

// console.log( (3 + 4) * 5 % 3); // 2, operator precedence

//console.log(+true); // 1, unary plus operator converts to number
// console.log(true+); // 1, true is converted to number

// console.log(+"") // 0, empty string is converted to number

let num1, num2 , num3

num1 = num2 = num3 = 5 // all variables will be assigned the value 5
// console.log(num1, num2, num3); // 5 5 5

let gameCount = 100

//  gameCount++; //postfix increment
++gameCount; //prefix increment
//  console.log(gameCount); // 101
gameCount--;
// console.log(gameCount); // 100


//  link to study
//  https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
