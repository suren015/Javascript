// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
 
const mynums = [1,2,3];
const tot1 = mynums.reduce( (prev, curr) => {
    console.log(`prev val: ${prev} and initial value val: ${curr}`);
    return prev+curr;
}, 0);
console.log(tot1);

const tot2 = mynums.reduce( function(prev, curr) {
    console.log(`prev val: ${prev} and initial value val: ${curr}`);
    return prev+curr;
}, 0);
console.log(tot2);

const tot3 = mynums.reduce( (prev, curr) => prev+curr,0);
console.log(tot3);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 1999
    },
    {
        itemName: "cpp course",
        price: 999
    },
    {
        itemName: "sql course",
        price: 399
    }
]

// Sum of all prices in shopping cart ::>

const tot4 = shoppingCart.reduce((accumulator,obj)=>{
    return accumulator+ obj.price
},0)
console.log(tot4);