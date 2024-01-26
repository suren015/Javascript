// This is an Object and also an Object literal
const user = {
    username: "Surendra",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log('Get user details from database');
        console.log(`Username: ${this.username}`);        // username of current context
        console.log(this);      // current context
    }
}

console.log(user.username);     // Accesing any member from the Object
user.getUserDetails();

console.log(this);       // empty context
// For current context we use "this" keyword




// Constructor Function::
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = ()=>{
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

const userOne = User("Surendra", 5, true);
console.log(userOne);                       //-->> Surendra, 5, true

const userTwo = User("Abc", 13, false);
console.log(userOne);                       //-->> Abc, 13, false

// UserTwo Overriding the values of UserOne, and UserOne get the values of UserTwo........To overcome this problem we have to use constructor function::

const u1 = new User("Karan", 6, true);
const u2 = new User('Harry', 3, false);
console.log(u1);                             //-->> Karan, 6, true


/* Using 'new' keyword :: 1) An empty object is created which is known as instance.
                          2) constructor function call --> all arguments are packed in this
                          3) this keyword inject all the arguments
*/