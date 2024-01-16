const accountId = 14453
let accountEmail = "suren@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;

// accountId = 2   // Not allowed
accountEmail = "jadk@gmail.com"
accountPassword = "98705"
accountCity = "Bengluru"


console.log([accountId, accountEmail, accountPassword, accountCity, accountState ]);

/* 
Prefer not to use var beacause of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
