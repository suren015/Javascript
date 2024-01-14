// Number to Number Comparison =>
console.log(2 >= 1);
console.log(13 == 13);
console.log(2 != 1);


// String-Number Comparison => String is converted into Number data type
console.log("2">1);
console.log(1<"02");

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// Note => The reason is that an equlity check == and comparision > < >= <= worrk differently. Comparision convert null to a number, treating it as 0, That's why (3) null>=0 is true and (1) null>0 is false

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === Check

console.log("2" === 2);