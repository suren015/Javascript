const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);

// console.log(Math.PI);     // return 3.14
// Math.PI=5;
// console.log(Math.PI);    // return 3.14, didn't change

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));       // Object, key-property

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name')); 

for (const [key, value] of Object.entries(chai)) {
    if(typeof(value)!=='function'){
        console.log(`${key}: ${value}`);
    }
}