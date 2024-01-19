const userEmail = "has@gmail.com";

if(userEmail){
    console.log("Got User Email");
}else{
    console.log("Don't have User Email");
}

// Falsey values::> false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values::> true, 1, "0", "false", " ", [], {}, function(){}


// Checking for Empty Array::
const myArr = [];
if(myArr.length==0){
    console.log("Array is Empty")
}

// Checking for Empty Object::
const objname = {};
if(Object.keys(objname).length==0){                  // Object.keys(object name) return an Array of Keys 
    console.log("Object is Empty");
}




/*-------------------------- Nullish Coalescing Operator (??): null defined ------------------------- */

let val1;
val1=5??10;    // first value is not null so return 5
console.log(val1);

val1=null??10  // first value is null so return second value
console.log(val1);

val1=undefined??15
console.log(val1);

val1=null??null
console.log(val1);



// Terniary Operator::>
// Condition?true:false;

const icePrice = 100;
icePrice>=50?console.log("YES"):console.log("NO");