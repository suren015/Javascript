// Primitive Data Type =>

        // 7 types:: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100; // Number data type
const scoreValue = 100.3;  // Number data type
const isLoggedIn = false;  // Boolean Data type
const outTmp = null;       // Object data type
let userEmail;             // Undefined data type

const Id = Symbol('123')   // Symbol data type
const anotherId = Symbol('123')

console.log(Id == anotherId);

const bigInteger = 156824269874268742n;

/* Javascript is a dynamically typed Languahe. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. */




// Reference Data Type/ Non Primitive =>
      
        // Array, Objects, Functions

const heroes = ["hero1", "hero2", "hero3"];  // Arrar Data type


let myObj = {            // Object Data Type
    name: "Suren",
    age: 19,
}

const myFunction = function(){          // Function Data Type
    console.log("Hi, Suren...!!");
}


// what is the datatype of any variable =>

console.log(typeof(myObj));          //Object datatype
console.log(typeof(myFunction));     //Function datatype

/*

Type	        typeof return value        Object wrapper
Null	           "object"	                    N/A
Undefined	      "undefined"	                N/A
Boolean	           "boolean"	               Boolean
Number	           "number"	                   Number
BigInt	           "bigint"	                   BigInt
String	           "string"	                   String
Symbol	           "symbol"	                   Symbol
     
*/