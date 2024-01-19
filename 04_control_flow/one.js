// "if" Statement ::>

const isUserLoggedIn = true;
if(isUserLoggedIn){
    console.log(`Yes, user logged in.`);
}

// Operators:: <, >, <=, >=, ==, !=, ===
if(2 == "2"){                           // Only for value checking
    console.log("Executed-1");
}
if(2 === "2"){
    console.log("Wxwctued-2");         // Both value and data type checking
}

const temp = 41;
if(temp === 41){
    console.log("temp is equal to 41");
}

const score = 100;
if(score>50){
    let power = 200;
    console.log(`power is: ${power}`);
}
// console.log(`Outside power is: ${power}`);   // This line gives an error, if we use var instead of let then it execute as var is globally declared variable.


const Username = true;
const debitCard = true;
const loggedinfromemail = true;
const loggedinfromgoogle = false;

// AND Operator
if(isUserLoggedIn && debitCard){
    console.log("Allow to buy course");
}

// OR Operator
if(loggedinfromemail || loggedinfromgoogle){
    console.log("User logged in");
}