// "this Keyword" :: The value of this depends on in which context it appears: function, class, or global.
const user = {
    username: "Suren",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);    // "this" keyword is use for current context and here current context is user object
        console.log(this);
    }
}

user.welcomeMessage();    // Return Suren, welcome to website

user.username = "Hitesh";            // Current context value change
user.welcomeMessage();    // Return Hitesh, welcome to website

console.log(this);      // current context is empty

/********************************************* Functon ********************************************************** */

function chai(){ 
    let username = "Dev";
    console.log(this);    // Current context is function chai
    console.log(this.username); // Gives undefined beacuse in function we cannot use this keyword to access variables 
}
chai();

const chaai = function(){
    let user = "Hitesh";
    console.log(this);
    console.log(this.user);
}
chaai();

/******************************************** Arrow Function ****************************************************** */

/* An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

    1) Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
    2) Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
    3) Arrow functions cannot use yield within their body and cannot be created as generator functions.

*/


// Syntax :: " ()=>{} "
const chaaai = ()=>{
    let user1 = "Devesh";
    console.log(this);          // Return empty Context like {}
    console.log(this.user1);    // Return undefined 
}
chaaai();


//Basic Arrow Function ::
const addtwo = (n1,n2)=>{                  // Using curly braces -> use return   --------- Explicit Function
    return n1+n2;
}
console.log(addtwo(3,4));   // Return 7

//Implicit Return Function::
const addthree = (n1,n2,n3)=>n1+n2+n3;        // No Bracket, no return use
console.log(addthree(1,2,3));

const addt1 = (n1,n2)=>(n1+n2);            // Using Parenthesis -> No return use
console.log(addt1(7,8));