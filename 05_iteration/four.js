const myObj = {
    js: 'Javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for-of loop doesn't do their work on Objects, instead of this we use for-in loop for objects

for (const it in myObj) {
    // here it is key in object
    console.log(it);
    console.log(`key is:: ${it} and key-value is:: ${myObj[it]}`);
}

const programming = ["js", "ruby", "py", "java", "cpp"];
for(const it in programming){
    console.log(`indes is: ${it} and value is: ${programming[it]}`);
}


// Conclusion for-in and for-of loop in Javascript:: 
// 1) The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.

// 2) JavaScript for-in loop iterates only over those keys of an object which have their enumerable property set to “true”.

// for..of loop -> Only values
// for..in loop -> key + values


/* We cannot iterate over map by for..in loop */

// const mp = new Map();
// mp.set('IN', "INDIA");
// mp.set('USA', "Unites State of America");
// mp.set('Fr', "France");
// mp.set('IN', "INDIA");

// for (const it in mp) {
//     console.log(`key is: ${it} and value is: ${mp[it]}`);
// }