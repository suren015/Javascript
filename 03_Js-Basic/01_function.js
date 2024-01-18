// Function Syntax ::>  Keyword FunctionName(){};

// Declaring a function ::
function saymyname(){
    console.log('S');
    console.log('U');
    console.log('R');
    console.log('E');
    console.log('N');
}

// saymyname => Reference of function
// saymyname() => Execution of Function

// Calling a function ::>
saymyname();


// Adding two number by function ::
function addtwonumber(num1, num2){
    console.log(num1+num2);
}

addtwonumber(3,4);           // Return 7

addtwonumber(3,"4");         // Return 34

addtwonumber(3,null);        // Return 3


//Function with return
function multi(n1,n2){
    return n1*n2;
}
let x = multi(5,4);
console.log(x);          // Return 20


function loginuser(user){
    if(user == undefined){
        console.log("Please enter a username");
        return;
    }
    return `${user} just logged in`;
}

let y = loginuser("Suren");
console.log(y);

// Overriding 
function login(username = "sam"){
    return username;
}
let a1 = login();
let a2 = login("Suren");

console.log(a1);     // Return sam
console.log(a2);     // Return Suren, overriding sam


/******************************************************************************************/

// Rest Operator for (200,300,400...)
function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,500,2000));    // Return [200, 400, 500, 2000]

let obb = {
    username: "Dave",
    price: 199
}
function handleObject(anyobj){
    console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);
}
handleObject(obb);     // Calling object from ouside

// Calling object inside function
handleObject({
    username: "sam",
    price: 299
})

/******************************************************************************************/



// Passing array::>
const myArray = [200, 40, 78, 980];
function returnSecondValue(anyarr){
    return anyarr[1];
}
console.log(returnSecondValue(myArray));
console.log(returnSecondValue([65,66,9,8]));