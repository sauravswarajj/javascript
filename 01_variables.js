const accountId = 144553
let accountEmail = "career@sauravswaraj.com"
var accountPassword = "Saurav@123"
accountCity = "South West Delhi"
let accountState;

//  accountId = 2  // not allowed, const cannot be reassigned

accountEmail = "sauravswarajj@gmail.com"
accountPassword = "Saurav@1234"
accountCity = "Najafgarh"

console.log(accountId);

/* 
prefer not to use var, use let or const instead
because of issue in block scope and functional scope
*/

console.table([ accountId, accountEmail, accountPassword, accountCity, accountState ]);