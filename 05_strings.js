const name = "Saurav"; // String
const repoCount = 13; // Number

// console.log(name + repoCount + " Swaraj");   // olderway to write or display the result

// console.log(`Hello ${name} your repo count is ${repoCount}`); // Template Literals, modern way to write or display the result

const gameName = new String("Saurav-Game-Swaraj");

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length); // 18, length of the string
// console.log(gameName.toUpperCase()); // SAURAV-GAME-SWARAJ
// console.log(gameName.charAt(2)); // u, character at index 2
// console.log(gameName.indexOf("r")); // 3, index of first occurrence of 'r'

const newString = gameName.substring(0, 4); // Saur, substring from index 0 to 4
// console.log(newString); // Saur

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString); // Game, slice from index -8 to 4

const newStringOne = "   Saurav   ";
// console.log(newStringOne);
// console.log(newStringOne.trim()); // "Saurav", removes whitespace from both ends

const url = "https://saurav.com/saurav%2Øswaraj";
// console.log(url.replace("%2Ø", "-")); // https://saurav.com/saurav-swaraj, replaces '%2Ø' with '-'
// console.log(url.includes('jaishwal')); // false, checks if 'jaishwal' is in the URL
// console.log(gameName.split("-")); // ["Saurav", "Game", "Swaraj"], splits the string by '-'


