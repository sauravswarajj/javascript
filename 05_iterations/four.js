const myObject = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby',
}

// Note :- Object ke liye forof loop ni hota hai, isliye for in loop use krte hai

for (const key in myObject) {
    // console.log(key);
}

// line no 10 me print krane pe hme key to mil gyi bs abb value ya object bhi chahiye hoga 

for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`)
} 


// can we try with forin loop

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

// Note :- Arrays ki bhi keys hoti hai, object ka design hi isiliye hua tha ki kyuki arrays ki jo keys hai wo zero(0) se start hoti hai and by default number hi hoti hai. Object me aap jo marzi aap keys daal skte hai.


const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");

// ye print ni hoga kyuki ye itratable ni hai to iss ko iss tarah se nilikha jaa skta hai, tarike hai likhne ke but aise ni likhte hai, map me for of loop use hota hai
for (const key in map) {
    console.log(key)
}