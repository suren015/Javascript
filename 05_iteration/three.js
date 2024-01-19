// for of  ::> Syntax ->      for (const iterator of object) {}

// ["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const it of arr) {
    console.log(it);
}

const greetings = "Hello World";
for (const it of greetings) {
    console.log(`Each char is ${it}`);
}


// Map ::>

const mp = new Map();
mp.set('IN','India');
mp.set('USA', 'United State of America');
mp.set('FR', 'France');
mp.set('IN', 'India')

console.log(mp);

for (const it of mp) {
    console.log(it);                // Return array of key and value
}

for (const [key,val] of mp) {                 // Destructure of Array
    console.log(key, ':-', val);
}

// Object ::>  forof syntax is not used to iterate Objects
const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObject) {            //Gives an error
//     console.log(key, ':-', value);
// }