
// Scope ::> {}, Curly Braces with function and other

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);  a is not defined as it is define in scope
// console.log(b);  b is not defined as it is define in scope
console.log(c);     // Return 30

// ** So we ignore var in javascript ::  The var is globally-scoped variables, optionally initializing each to a value.

/************************************************************************************************ */

// ** The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.
let  a = 300;
if(true){
    let a = 500;
    console.log(`Inner:: ${a}`);
}
console.log(`Outer:: ${a}`);       // Here a is independent from the scope


/************************************************************************************************ */

function one(){
    const username = "Suren";

    function two(){
        const website = "Javascript";
        console.log(username);
    }

    // console.log(website);     // website is not defined gives an error
    two();
}

one();

/************************************************************************************************ */

if(true){
    const username = "Suren";
    if(username == "Suren"){
        const website = "Javascript";
        console.log(username + " " + website);
    }
    // console.log(website);     // website is not defined in this scope
}
// console.log(username);   // username is not defined in this scope


/************************************ Interesting ********************************************* */

console.log(addone(5));
function addone(num){
    return num+1;
}
console.log(addone(5));



// console.log(addtwo(5));    // Gives an error, as cannot access before initialisation
const addtwo = function(num){
    return num+2;
}
console.log(addtwo(5));