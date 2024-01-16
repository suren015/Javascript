// Array =>  The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

const myarr = [0, 1, 3, 4, 5];

console.log(myarr[2]);

// JavaScript arrays are resizable and can contain a mix of different data types. 

// JavaScript array-copy operations create shallow copies. What is Shallow copy? => A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too.

const myheros = ["shaktiman", 'naagraj'];
console.log(typeof myheros);     // object type datatype

const myarr2 = new Array(1,2,3,4,5);
console.log(myarr2[2]);
console.log(typeof myheros);     // object type datatype


// Array methods =>

myarr.push(6);         // pushing an element to the last in array
console.log(myarr);

myarr.pop()       // pop an element from the back of array
console.log(myarr);


let x = 10;
myarr.unshift(x);      // push an element to the start of the array
console.log(myarr);

myarr.shift();         // pop element from the start position
console.log(myarr);

// Finding an element in array::
console.log(myarr.includes(18));     // return false as 18 is not present in the myarr

// Finding index of any element::
console.log(myarr.indexOf(4));      // Return 3
console.log(myarr.indexOf(18));     // Return -1 as element is not present in the array


const newarr = myarr.join();

console.log(myarr);
console.log(typeof myarr);         // object data type

console.log(newarr);
console.log(newarr);
console.log(typeof newarr);        // string datatype


// slice and splice =>
                   // Slice :: Not include the last index in range
                   // Splice :: include the last index in range

console.log(myarr);

const m1 = myarr.slice(1,3);
console.log("Slice ", m1);

const m2 = myarr.splice(1,3);
console.log("Splice ", m2);
