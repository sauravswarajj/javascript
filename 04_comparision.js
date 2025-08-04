// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 <= 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

// console.log("2" > 1); // true, string "2" is converted to number 2
// console.log("02" > 1); // true, string "02" is converted to number 2
// console.log("02" == 1); // false, string "02" is converted to number 2, but not equal to 1
// console.log(true == 1); // true, boolean true is converted to number 1
// console.log(false == 0); // true, boolean false is converted to number 0


// console.log(null > 0); // false, null is converted to 0
// console.log(null < 0); // false, null is converted to 0
// console.log(null == 0); // false, null is not equal to 0
// console.log(null >= 0); // true, null is converted to 0
// console.log(null <= 0); // true, null is converted to 0
// console.log(null == undefined); // true, null is equal to undefined


// console.log(undefined == 0); // false, undefined is not equal to 0
// console.log(undefined > 0); // false, undefined is not greater than 0
// console.log(undefined < 0); // false, undefined is not less than 0
// console.log(undefined >= 0); // false, undefined is not greater than or equal to 0
// console.log(undefined <= 0); // false, undefined is not less than or equal to 0
// console.log(undefined == null); // true, undefined is equal to null

// === check data type and value

// console.log(undefined === null); // false, strict equality, different types      
// console.log(null === undefined); // false, strict equality, different types