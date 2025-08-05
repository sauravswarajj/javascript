// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString()); // "Mon Oct 16 2023 12:00:00 GMT+0530 (India Standard Time)"
// console.log(myDate.toDateString()); // "Mon Oct 16 2023"
// console.log(myDate.toLocaleString()); // "10/16/2023, 12:00:00 PM"
// console.log(myDate.toISOString()); // "2023-10-16T06:30:00.000Z", ISO format
// console.log(myDate.getFullYear()); // 2023
// console.log(myDate.getMonth()); // 9 (0-based index, October is 9) random value as we didn't set it
// console.log(myDate.getDate()); // 16
// console.log(myDate.getHours()); // 12
// console.log(myDate.getMinutes()); // 0
// console.log(myDate.getSeconds()); // 0
// console.log(myDate.getMilliseconds()); // 0
// console.log(myDate.getTime()); // Timestamp in milliseconds since January 1, 1970


// console.log(typeof myDate); // "object"

// let createMyDate = new Date(2024, 0, 26);
// let createMyDate = new Date(2024, 0, 26, 7, 30);

// console.log(createMyDate.toLocaleString('default', { month: 'long' })); // "January"
// console.log(createMyDate.getMonth());

let myCreatDate = new Date("2024-01-26");
// console.log(myCreatDate.toLocaleString()); // "26/1/2024, 5:30:00 am"


let myTimeStamp = Date.now(); // Current timestamp in milliseconds
// console.log(myTimeStamp); // e.g., 1708045800000 rando values as it is not given a specific date
// console.log(myCreatDate.getTime()); // Timestamp for the specific date in milliseconds
// console.log(Math.floor(Date.now()/1000)); // Current timestamp in seconds

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1); // Month is 0-based, so add 1 to get the correct month number
// console.log(newDate.getDay());// 0 for Sunday, 1 for Monday, ..., 6 for Saturday

//`${newDate.getDay()} and the time is}`;

// interview related questions

// we will customize the date format
newDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
})


