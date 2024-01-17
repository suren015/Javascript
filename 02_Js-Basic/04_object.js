// Singleton Object ::
const tinderuser = new Object();  
console.log(tinderuser);

tinderuser.id = "123abc";
tinderuser.name = "Sammy";
tinderuser.isLoggedIn = false;

console.log(tinderuser);

/***************************************/

const regularUser = {
    email: "some@gmail.com",
    funllname: {                      // key-Object
        userfullname: {                  // key-Object
            firstname: "Suren",              // key-String
            lastname: "tholiya"                 // key-String
        }
    }
}

console.log(regularUser.funllname.userfullname.lastname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}

const obj3 = {obj1, obj2};
console.log(obj3);             // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// For combining all values of two or more objects ::
// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.


const obj4 = Object.assign(obj1,obj2);
console.log(obj4);            // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const obj5 = {
    5: "a",
    6: "b"
}

// Another form of assigning {Its a good approach}
const obj6 = Object.assign({},obj1,obj2,obj5);     // source -> target
console.log(obj6);

// spread operator => ...
const obj7 = {...obj1,...obj2,...obj5};
console.log(obj7);

// An array of object =>
const user =[
    {
        id: 1,
        email: "name1@gmail.com"
    },
    {
        id: 2,
        email: "name2@gmail.com"
    },
    {
        id: 3,
        email: "name3@gmail.com"
    }
]


console.log(user[1].email);


// For all keys of an Object
// Syntax :: Object.keys(object_name);

console.log(Object.keys(tinderuser));      // Return their tinderuser type of each key 
console.log(Object.values(tinderuser));      // Reutrn the values of all key mapped in tinderuser
console.log(Object.entries(tinderuser));      // Return an array of key/ values


// Check that property exist in object or not
console.log(tinderuser.hasOwnProperty('isLoggedIn'));
console.log(tinderuser.hasOwnProperty('contact'));