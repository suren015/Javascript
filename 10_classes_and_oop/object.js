function multiplyByFive(num){
    return num*5;
}

multiplyByFive.power = 2

console.log(multiplyByFive(5));

console.log(multiplyByFive.power);     // power is a property of function, so we can say that function is also an object

console.log(multiplyByFive.prototype);    // {}






function createUser(username, score){
    this.username = username;
    this.score = score;
}
// Our own method injection in function::
createUser.prototype.increament=function(){
    this.score++;                               // 'this'
 //means jisne bhi bulaaya h uski value increment krdo
}
createUser.prototype.printMe=function(){
    console.log(`score is: ${this.score}`);
};

// const chai = createUser('Chai', 25);
// const tea = createUser('Tea', 250);
// chai.printMe();                          // Give an error because we inject printMe function but didn't tell about this to our chai variable so firstly we have to tell about them, for this we use 'new' keyword

const chai = new createUser('Chai', 25);
chai.printMe();    // return value 25

chai.increament();
chai.printMe();    // return value 26


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/