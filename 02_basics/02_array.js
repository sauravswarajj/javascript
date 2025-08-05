const marvel_heros = [ "thor", "Ironman", "Hulk"];
const dc_heros = [ "superman", "flash", "batman"];

// marvel_heros.push(dc_heros); // Adds the entire dc_heros array as a single element
// console.log(marvel_heros); // ["thor", "Ironman", "Hulk", ["superman", "flash", "batman"]]
// console.log(marvel_heros[3][1]); // "flash", accesses the second element of the nested array

const allHeros = marvel_heros.concat(dc_heros); // Combines both arrays into a new array
// console.log(allHeros); // ["thor", "Ironman", "Hulk", "superman", "flash", "batman"]

const all_new_heros = [...marvel_heros, ...dc_heros]; // Using spread operator to combine arrays
// console.log(all_new_heros); // ["thor", "Ironman", "Hulk", "superman", "flash", "batman"]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity);// Flattens the array to a single level
// console.log(real_another_array);// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


console.log(Array.isArray("Saurav")); // false, checks if "Saurav" is an array
console.log(Array.from("Swaraj"));
console.log(Array.from({ name: "Saurav"})); // [{ name: "Saurav" }], converts an object to an array with one element


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100, 200, 300], creates an array from the arguments

