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


/******************************* Operations ********************************/

let value = 3;
let negvalue = -value;
console.log(negvalue);

console.log(value+value);
console.log(value-value);
console.log(value*value);
console.log(value/value);
console.log(value%value);
console.log(value**value);

let str1 = "Surendra";
let str2 = "Tholiya"

console.log(str1+str2);

// Note => Don't do these type of code ::

console.log("1"+2);    // String first then all other treat as string 
console.log("1"+2+2)

console.log(1+"2")    // String last then all first operation and then string
console.log(1+2+"2")

console.log((3+4)*5%3);

// Special Conversion =>

console.log(true);
console.log(+true); // return 1
// console.log(true+);  Gives an error
console.log(+""); // return 0


let gc = 100;
// gc++;
console.log(gc);
console.log(++gc);

gc = 100;
console.log(gc);
console.log(gc++);
console.log(gc);

// For above process, u can use this link :: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

