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

// The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.

let another = getname.slice(-4,6);    // For Negative values that is checking from the backside
console.log(another);    

const newStringOne = "      suren    ";
console.log(newStringOne);              //print whole string with space
console.log(newStringOne.trim());       //print whole string without space :: Remove white spaces


const url = "https://suren.com/suren%20tholiya";

console.log(url.replace('%20','-'));  // Replace '%20' with '-'
console.log(url.includes("suren"));   // is 'suren' is present in url ?

 

// The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

// Syntax :: split(separator, limit)
// Syntax :: split(separator)

const str = 'The quick brown fox jumps over the lazy dog';

const words = str.split(' ');    // String converted into array based on ' '
console.log(words[3]);   // return fox
console.log(words[8]);   // return dog