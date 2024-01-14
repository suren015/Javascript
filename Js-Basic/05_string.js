// U can use single or double quots for string 

const name = "Suren";
const cnt = 50;

console.log(name + cnt + "Value");   // Don't use this, this is outdated

// Modern days use =>

console.log(`Hello, My name is ${name} and my repo cnt is ${cnt}`);

const getname = new String("Surendra");
console.log(getname[3]);
console.log(typeof(getname));   //Object data Type

// Protoype => Properties::

// console.log(getname.__proto__);

console.log(getname.length);
console.log(getname.toLowerCase());  // all lowecase letter
console.log(getname.toUpperCase());  // all Uppercase Letter
console.log(getname.charAt(4));      // Character at position 4
console.log(getname.substring(2, 5));   // print substring from start idx to end idx - 1.

console.log(getname.indexOf('end'));  // return the position of first character of the substring

