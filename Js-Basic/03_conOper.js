let score = 33

console.log(typeof score);
console.log(typeof(score));


score = "33abc";
let valueNumber = Number(score);

console.log(valueNumber)
console.log(typeof(valueNumber));


// String to Number
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


let isLoggedIn = 1;
let isBooleanLoggedIn = Boolean(isLoggedIn);
console.log(isBooleanLoggedIn);   // return true

isLoggedIn = "Suren"
isBooleanLoggedIn = Boolean(isLoggedIn)
console.log(isBooleanLoggedIn);

// String or Number to Bool
// 1 => true, 0 => false
// "" => false, "Suren" => true

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof(stringNumber));
