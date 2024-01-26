// let myName = "Surendra    ";
// let myCamera = "Oppo_X12    ";
// console.log(myName.truelength);  // this is undefined, we have to find actual length of our string ithout white spaces, not use trim() function


let myHeros = ['thor', 'spiderman'];

let heropower = {
    thor: 'hammer',
    spiderman: 'sling',

    getspidypower: function(){
        console.log(`spidy power : ${this.spiderman}`);
    }
}

// Inject our method to all objects
Object.prototype.Suren = function(){
    console.log('Suren is present in all object');
}

heropower.Suren();            // this will return the value as Object have Suren method

// As we know all arrays, function, string are object datatype, so does suren method is also in array object
myHeros.Suren();              // Yes, this property is also for array object



// let we have to inject method in array and see that this property is also in object or not
Array.prototype.harry = function(){
    console.log('Harry is present in all array');
}

myHeros.harry();       // harry method is in array
// heropower.harry();    // Return error, as harry method is not in object......array is low hierarchy level while object is high hierarchy level, we can access values from hight to low,,,,,,,not from low to high






// OLD Methods of Inheritance::

const User = {
    name: 'Jak',
    email: 'jak@google.com'
}
const Teacher = {
    makeVdo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TAsupport = {
    makeAssignment: 'JS tutorial',
    fullTime: true,
    __proto__: TeachingSupport                   // Object TAsupport have access of TeachingSupport attributes
}

// for accessing the whole properties of user by teacher object::
Teacher.__proto__ = User;




// Modern Syntax of Inheritance::
Object.setPrototypeOf(TeachingSupport, Teacher);    // TeachingSupport have an acees of all the properties of Teacher






// let see the first line of this blog's solution::

let anotheruser = "HumHYum          ";
// injecting a method 'truelength' which return the actual length without whitespaces
String.prototype.truelength = function(){
    console.log(`${this}`);       // return "HumHYum          "
    // console.log(`${this.name}`);   // undefined, we don't have access of name
    console.log(`True length is: ${this.trim().length}`);
}

anotheruser.truelength();


'hitesh'.truelength();             // return 6
'ChaiOrCoe   '.truelength();       // return 9