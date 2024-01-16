// Object => The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.


// Singleton done by :: Object.create

// Object Literals =>
const Jsuser = {
    //key: value    --> iska chkkr hota h / Key is treat as string
    name: "Suren",
    "Full name": "Surendra Tholiya",    // can't access by dot method, The only way to access this is Jsuser["full name"]
    age: 19,
    location: "Jaipur",
    email: "suren@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// Access Object ::=> 1) dot method :: object.key  2) object["key"]

console.log(Jsuser.location);  // dot method
console.log(Jsuser['age']);   // Object['key']

// Key as symbol in object 

let mysym = Symbol("M");
const obj = {
    name: "Suren",   // Key as String datatype
    mysym: "M", //Key as string
    [mysym]: 'N' // Key as symbol
}

console.log(obj.name);
console.log(obj['name']);
console.log(obj.mysym);        // Print value in which key as string
console.log(obj['mysym']);     // Print value in which key as string
console.log(obj[mysym]);       // Print value in which key as symbol


// Object value changed
Jsuser.age = 21;
console.log(Jsuser['age']);

// Object freeze so that no one can change its values.
Object.freeze(Jsuser);
Jsuser.age = 25;
console.log(Jsuser);


/*------------------------------------------------------------------*/

const obj1 = {
    name: "Karan",
    age: 20,
    std: 12
};

// Adding a function to Object
obj1.greeting = function(){
    console.log("Namaste, London..!!");
}

console.log(obj1.greeting());
console.log(obj1.greeting());


// Name reference in an object in a function::
obj1.greetingtwo = function(){
    console.log(`Hello, ${this.name}..!! Your age is ${this.age}`);
}

console.log(obj1.greetingtwo());