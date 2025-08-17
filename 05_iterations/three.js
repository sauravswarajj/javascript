// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);      
}

const greetings = "Hello World!";
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);        
}


//      maps  - it is known for unique keys and values. and also follow order

const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");

// console.log(map);

// Note :- if we want to show the values of map then we can use for of loop

// square bracket lagane se hm key aur value ko alag alag hold kr skte hai like [key, value] in below code
for (const [key, value] of map) {
    // console.log(key, ':-', value);        
}   