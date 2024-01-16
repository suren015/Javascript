const n1 = 100;                   // Its a number datatype
console.log(typeof n1);
console.log(n1);

const n2 = new Number(200);       // Creates Object of number data type
console.log(typeof n2);
console.log(n2);

let n3 = n1.toString().length;    // Converted to string and then calculate the length of string 
console.log(n3);

console.log(n1.toFixed(3));      // precise upto 3 decimal point


// The toPrecision() method of Number values returns a string representing this number to the specified precision.

let num = 123.586
console.log(num.toPrecision(4));  // return value 123.5


// The toLocaleString() method of Number values returns a string with a language-sensitive representation of this number

num = 1000000;
console.log(num.toLocaleString('en-IN'));



/* ------------------------- Maths ------------------------ */

console.log(Math);   // Math namespace object contains static properties and methods for mathematical constants and functions.

// Math works with the Number type. It doesn't work with BigInt.

let x = -19
console.log(Math.abs(x));  // Returns the absolute value of x.
console.log(Math.round(4.6));  // Returns the value of the number x rounded to the nearest integer.
console.log(Math.ceil(4.2));  // return upper value
console.log(Math.floor(4.2)); // Return lower value


console.log(Math.min(4,6,2,3,8));  // Return minimum value
console.log(Math.max(4,6,7,0,9));  // Return Maximum value

// Random function return value between 0 and 1
console.log(Math.random());


// A number between a range by random function

const min = 10;
const max = 20;


console.log((Math.floor(Math.random()*(max-min+1))+min));   // this gives a value between min and max. Why we should add min in the end? => to overcome the situation of 0, use min. Like if random function generate 0.02.