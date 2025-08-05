// array

const myArr = [1, 2, 3, 4, 5];
const myHeros = ["Shaktimaan", "Spiderman", "Batman", "Superman", "Ironman"];

const myArr2 = new Array(1, 2, 3, 4, 5);
// console.log(myArr[0]); // 1
// console.log(myHeros[0]); // Shaktimaan
// console.log(myArr2[4]); // 5

// Array methods

// myArr.push(6); // Adds 6 to the end of myArr
// myArr.pop(); // Removes the last element from myArr

// myArr.unshift(9);// Adds 9 to the beginning of myArr
// myArr.shift(); // Removes the first element from myArr

// console.log(myArr.includes(9)); // false, checks if 9 is in myArr
// console.log(myArr.indexOf(3)); // 2, index of first occurrence of 3 in myArr


const newArr = myArr.join();// "1,2,3,4,5", joins the elements of myArr into a string


// console.log(typeof newArr);


// slice and splice methods

console.log("A" , myArr);

const myn1 = myArr.slice(1, 3); // [2, 3], creates a new array from index 1 to 3 (not inclusive)
console.log(myn1); // [2, 3]

console.log("B" , myArr);

const myn2 = myArr.splice(1, 3); // [2, 3, 4], removes elements from index 1 to 3 (not inclusive) and returns them
console.log("C" , myArr);
console.log(myn2); // [2, 3, 4]