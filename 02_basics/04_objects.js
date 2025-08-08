// as we are now talk on Singleton

// const tinderUser = new Object(); // Creating an empty object using Object constructor as well as it is Singleton Object

const tinderUser = {}; // Creating an empty object using object literal notation and it is Not Singleton Object

tinderUser.id = "123abc";
tinderUser.name = "Saurav";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); // { id: '123abc', name: 'Saurav', isLoggedIn: false }


const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname: "Saurav",
            lastname: "Swaraj"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); // Saurav
// console.log(regularUser.fullname.userfullname.lastname); // Swaraj

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


// Note :- here we are using empty object{} below it means we are creating a new object and merging obj1, obj2, and obj4 into it
// const obj3 = Object.assign({}, obj1, obj2, obj4); // Merging multiple objects into one object 
// we will use less in real world
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj3 = {...obj1, ...obj2, ...obj4}; // Merging multiple objects into one object using spread operator
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


// we will use mostly when values comes form database
// array ke andar bahut objects ko merge karne ke liye

// array of objects [{}]
const users = [ 
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
 users[1].email
 console.log(tinderUser); // { id: '123abc', name: 'Saurav', isLoggedIn: false }

console.log(Object.keys(tinderUser)); // ['id', 'name', 'isLoggedIn'], returns an array of keys in the object
console.log(Object.values(tinderUser)); // ['123abc', 'Saurav', false], returns an array of values in the object
console.log(Object.entries(tinderUser)); // [['id', '123abc'], ['name', 'Saurav'], ['isLoggedIn', false]], returns an array of key-value pairs in the object

console.log(tinderUser.hasOwnProperty("id")); // true, checks if the object has a property 'id'
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true, checks if the object has a property 'isLoggedIn'
console.log(tinderUser.hasOwnProperty("isLogged")); // false, checks if the object has a property 'isLoggedIn' (note the typo)