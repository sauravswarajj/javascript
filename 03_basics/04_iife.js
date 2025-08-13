//                                Immediately Invoked Function Expressions (IIFE)


(function() {
    // named IIFE hai ye
    console.log(`DB CONNECTED`);    
})(); // This is an IIFE, it runs immediately

( (name) => {
    // unnamed IIFE hai ye
    console.log(`DB CONNECTED TWO ${name}`);  
})("Saurav"); // This is an IIFE with an arrow function, it runs immediately 